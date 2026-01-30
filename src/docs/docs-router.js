class PalazeDocsRouter {
  constructor() {
    this.contentCache = new Map();
    this.currentPage = '';
    this.sidebarState = {
      expandedMenus: new Set(),
      activeItem: null,
    };

    this.init();
  }

  init() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());

    // Listen for custom navigation events from web components
    document.addEventListener('plzNavigate', e => {
      const link = e.detail;
      if (link.startsWith('#')) {
        // Anchor link - scroll to section
        this.scrollToSection(link.substring(1));
      } else if (link.endsWith('.html')) {
        // Page navigation
        const hash = link.replace('.html', '');
        window.location.hash = hash;
      }
    });

    // Initial route
    this.handleRoute();
    this.setupSidebarListeners();
  }

  handleRoute() {
    const hash = window.location.hash.substring(1) || 'docs';
    const [pageName, section] = hash.split('-');

    if (this.currentPage !== pageName) {
      this.loadPage(pageName).then(() => {
        if (section) {
          setTimeout(() => this.scrollToSection(section), 100);
        }
        this.updateSidebarState(pageName, section);
      });
    } else if (section) {
      this.scrollToSection(section);
      this.updateSidebarState(pageName, section);
    }
  }

  async loadPage(pageName) {
    const contentContainer = document.getElementById('main');
    if (!contentContainer) return;

    // Show loading state
    contentContainer.style.opacity = '0.5';

    try {
      let content;

      // Check cache first
      if (this.contentCache.has(pageName)) {
        content = this.contentCache.get(pageName);
      } else {
        // Fetch content
        const response = await fetch(`docs/${pageName}.html`);
        if (!response.ok) throw new Error('Page not found');

        const html = await response.text();
        content = this.extractContent(html);

        // Cache the content
        this.contentCache.set(pageName, content);
      }

      // Update content with fade effect
      contentContainer.innerHTML = content;
      contentContainer.style.opacity = '1';

      // Update document title
      const title = contentContainer.querySelector('h1');
      if (title) {
        document.title = `Palaze - ${title.textContent}`;
      }

      this.currentPage = pageName;

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error loading page:', error);
      contentContainer.innerHTML = `
        <section class="content-detail">
          <h1>Error</h1>
          <p>No se pudo cargar el contenido. Por favor, inténtalo de nuevo.</p>
        </section>
      `;
      contentContainer.style.opacity = '1';
    }
  }

  extractContent(html) {
    // Create a temporary element to parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Find the main content
    const main = doc.getElementById('main');
    if (main) {
      return main.innerHTML;
    }

    // Fallback: extract all sections with content-detail class
    const sections = doc.querySelectorAll('section.content-detail');
    if (sections.length > 0) {
      return Array.from(sections)
        .map(s => s.outerHTML)
        .join('');
    }

    return '<section class="content-detail"><h1>Contenido no encontrado</h1></section>';
  }

  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setupSidebarListeners() {
    // Listen for clicks on sidebar items to update active state
    const sidebar = document.querySelector('plz-sidebar');
    if (!sidebar) return;

    sidebar.addEventListener('click', e => {
      const target = e.target.closest('plz-menu-item, plz-dropdown-menu');
      if (target) {
        // Update active states
        this.clearActiveStates();

        if (target.tagName === 'PLZ-MENU-ITEM') {
          target.active = true;
        }
      }
    });
  }

  clearActiveStates() {
    document.querySelectorAll('plz-menu-item').forEach(item => {
      item.active = false;
    });
  }

  updateSidebarState(pageName, section) {
    // Clear previous active states
    this.clearActiveStates();

    // Find and activate the current menu item
    const menuItems = document.querySelectorAll('plz-menu-item');
    menuItems.forEach(item => {
      const link = item.getAttribute('link');
      if (link) {
        if (section && link.includes(section)) {
          item.active = true;
        } else if (!section && link.includes(pageName)) {
          item.active = true;
        }
      }
    });

    // Expand parent dropdowns for active items
    menuItems.forEach(item => {
      if (item.active) {
        const dropdown = item.closest('[slot="dropdown"]');
        if (dropdown) {
          const parentDropdown = dropdown.closest('plz-dropdown-menu');
          if (parentDropdown && !parentDropdown.static) {
            parentDropdown.expand();
          }
        }
      }
    });
  }
}

// Initialize router when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new PalazeDocsRouter());
} else {
  new PalazeDocsRouter();
}
