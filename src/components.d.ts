/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PlzButton {
        "active": boolean;
        "color"?: string;
        "colorProgress": string;
        "corners"?: string;
        "hoverColor": string;
        "icon"?: string;
        "link": string;
        "shadowColor"?: string;
        "size"?: string;
        "target": string;
        "text": string;
        "variant"?: string;
    }
    interface PlzCard {
        "hover": string;
        "image": string;
        "target": string;
        "url": string;
        "variant": string;
        "width": string;
    }
    interface PlzColors {
        "colors": string;
        "variant": string;
    }
    interface PlzDivider {
        "color": string;
        "customDivider": string;
        "customPosition": string;
        "height": string;
        "spaceBottom": string;
        "spaceTop": string;
        "type": string;
        "variant": string;
    }
    interface PlzDropdownMenu {
        "active": boolean;
        "colorHover": string;
        "colorText": string;
        "link": string;
        "variant": string;
    }
    interface PlzFigure {
        "alt": string;
        "footer": string;
        "header": string;
        "height": number;
        "src": string;
        "width": number;
    }
    interface PlzFooter {
        "height": string;
        "image": string;
        "variant": string;
    }
    interface PlzHeader {
        "color": string;
        "colorHover": string;
        "colorText": string;
        "colorTextHover": string;
        "variant": string;
    }
    interface PlzHero {
        "height": string;
        "image": string;
        "variant": string;
    }
    interface PlzMenu {
        "borderMenu": string;
    }
    interface PlzMenuItem {
        "active": boolean;
        "colorHover": string;
        "colorText": string;
        "imageUrl": string;
        "link": string;
        "submenu": boolean;
        "target": string;
        "variant": string;
    }
    interface PlzSection {
        "variant": string;
    }
    interface PlzShowcase {
    }
    interface PlzShowcaseCode {
        "textCode": string;
        "textSize": string;
    }
    interface PlzShowcaseRender {
        "display": string;
        "gap": string;
        "height": string;
        "paddingBottom": string;
        "paddingLeft": string;
        "paddingRight": string;
        "paddingTop": string;
        "verticalAlign": string;
    }
    interface PlzSidebar {
        "color": string;
        "idMain": string;
        "spaceTop": string;
        "width": string;
    }
    interface PlzSpinner {
        "colorPrimary": string;
        "colorSecondary": string;
        "colorsBola": string;
        "variant": string;
    }
    interface PlzTooltip {
        "link": string;
        "position": string;
        "target": string;
        "text": string;
        "variant": 'text' | 'link';
    }
}
declare global {
    interface HTMLPlzButtonElement extends Components.PlzButton, HTMLStencilElement {
    }
    var HTMLPlzButtonElement: {
        prototype: HTMLPlzButtonElement;
        new (): HTMLPlzButtonElement;
    };
    interface HTMLPlzCardElement extends Components.PlzCard, HTMLStencilElement {
    }
    var HTMLPlzCardElement: {
        prototype: HTMLPlzCardElement;
        new (): HTMLPlzCardElement;
    };
    interface HTMLPlzColorsElement extends Components.PlzColors, HTMLStencilElement {
    }
    var HTMLPlzColorsElement: {
        prototype: HTMLPlzColorsElement;
        new (): HTMLPlzColorsElement;
    };
    interface HTMLPlzDividerElement extends Components.PlzDivider, HTMLStencilElement {
    }
    var HTMLPlzDividerElement: {
        prototype: HTMLPlzDividerElement;
        new (): HTMLPlzDividerElement;
    };
    interface HTMLPlzDropdownMenuElement extends Components.PlzDropdownMenu, HTMLStencilElement {
    }
    var HTMLPlzDropdownMenuElement: {
        prototype: HTMLPlzDropdownMenuElement;
        new (): HTMLPlzDropdownMenuElement;
    };
    interface HTMLPlzFigureElement extends Components.PlzFigure, HTMLStencilElement {
    }
    var HTMLPlzFigureElement: {
        prototype: HTMLPlzFigureElement;
        new (): HTMLPlzFigureElement;
    };
    interface HTMLPlzFooterElement extends Components.PlzFooter, HTMLStencilElement {
    }
    var HTMLPlzFooterElement: {
        prototype: HTMLPlzFooterElement;
        new (): HTMLPlzFooterElement;
    };
    interface HTMLPlzHeaderElement extends Components.PlzHeader, HTMLStencilElement {
    }
    var HTMLPlzHeaderElement: {
        prototype: HTMLPlzHeaderElement;
        new (): HTMLPlzHeaderElement;
    };
    interface HTMLPlzHeroElement extends Components.PlzHero, HTMLStencilElement {
    }
    var HTMLPlzHeroElement: {
        prototype: HTMLPlzHeroElement;
        new (): HTMLPlzHeroElement;
    };
    interface HTMLPlzMenuElement extends Components.PlzMenu, HTMLStencilElement {
    }
    var HTMLPlzMenuElement: {
        prototype: HTMLPlzMenuElement;
        new (): HTMLPlzMenuElement;
    };
    interface HTMLPlzMenuItemElement extends Components.PlzMenuItem, HTMLStencilElement {
    }
    var HTMLPlzMenuItemElement: {
        prototype: HTMLPlzMenuItemElement;
        new (): HTMLPlzMenuItemElement;
    };
    interface HTMLPlzSectionElement extends Components.PlzSection, HTMLStencilElement {
    }
    var HTMLPlzSectionElement: {
        prototype: HTMLPlzSectionElement;
        new (): HTMLPlzSectionElement;
    };
    interface HTMLPlzShowcaseElement extends Components.PlzShowcase, HTMLStencilElement {
    }
    var HTMLPlzShowcaseElement: {
        prototype: HTMLPlzShowcaseElement;
        new (): HTMLPlzShowcaseElement;
    };
    interface HTMLPlzShowcaseCodeElement extends Components.PlzShowcaseCode, HTMLStencilElement {
    }
    var HTMLPlzShowcaseCodeElement: {
        prototype: HTMLPlzShowcaseCodeElement;
        new (): HTMLPlzShowcaseCodeElement;
    };
    interface HTMLPlzShowcaseRenderElement extends Components.PlzShowcaseRender, HTMLStencilElement {
    }
    var HTMLPlzShowcaseRenderElement: {
        prototype: HTMLPlzShowcaseRenderElement;
        new (): HTMLPlzShowcaseRenderElement;
    };
    interface HTMLPlzSidebarElement extends Components.PlzSidebar, HTMLStencilElement {
    }
    var HTMLPlzSidebarElement: {
        prototype: HTMLPlzSidebarElement;
        new (): HTMLPlzSidebarElement;
    };
    interface HTMLPlzSpinnerElement extends Components.PlzSpinner, HTMLStencilElement {
    }
    var HTMLPlzSpinnerElement: {
        prototype: HTMLPlzSpinnerElement;
        new (): HTMLPlzSpinnerElement;
    };
    interface HTMLPlzTooltipElement extends Components.PlzTooltip, HTMLStencilElement {
    }
    var HTMLPlzTooltipElement: {
        prototype: HTMLPlzTooltipElement;
        new (): HTMLPlzTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "plz-button": HTMLPlzButtonElement;
        "plz-card": HTMLPlzCardElement;
        "plz-colors": HTMLPlzColorsElement;
        "plz-divider": HTMLPlzDividerElement;
        "plz-dropdown-menu": HTMLPlzDropdownMenuElement;
        "plz-figure": HTMLPlzFigureElement;
        "plz-footer": HTMLPlzFooterElement;
        "plz-header": HTMLPlzHeaderElement;
        "plz-hero": HTMLPlzHeroElement;
        "plz-menu": HTMLPlzMenuElement;
        "plz-menu-item": HTMLPlzMenuItemElement;
        "plz-section": HTMLPlzSectionElement;
        "plz-showcase": HTMLPlzShowcaseElement;
        "plz-showcase-code": HTMLPlzShowcaseCodeElement;
        "plz-showcase-render": HTMLPlzShowcaseRenderElement;
        "plz-sidebar": HTMLPlzSidebarElement;
        "plz-spinner": HTMLPlzSpinnerElement;
        "plz-tooltip": HTMLPlzTooltipElement;
    }
}
declare namespace LocalJSX {
    interface PlzButton {
        "active"?: boolean;
        "color"?: string;
        "colorProgress"?: string;
        "corners"?: string;
        "hoverColor"?: string;
        "icon"?: string;
        "link"?: string;
        "shadowColor"?: string;
        "size"?: string;
        "target"?: string;
        "text"?: string;
        "variant"?: string;
    }
    interface PlzCard {
        "hover"?: string;
        "image"?: string;
        "target"?: string;
        "url"?: string;
        "variant"?: string;
        "width"?: string;
    }
    interface PlzColors {
        "colors"?: string;
        "variant"?: string;
    }
    interface PlzDivider {
        "color"?: string;
        "customDivider"?: string;
        "customPosition"?: string;
        "height"?: string;
        "spaceBottom"?: string;
        "spaceTop"?: string;
        "type"?: string;
        "variant"?: string;
    }
    interface PlzDropdownMenu {
        "active"?: boolean;
        "colorHover"?: string;
        "colorText"?: string;
        "link"?: string;
        "variant"?: string;
    }
    interface PlzFigure {
        "alt"?: string;
        "footer"?: string;
        "header"?: string;
        "height"?: number;
        "src"?: string;
        "width"?: number;
    }
    interface PlzFooter {
        "height"?: string;
        "image"?: string;
        "variant"?: string;
    }
    interface PlzHeader {
        "color"?: string;
        "colorHover"?: string;
        "colorText"?: string;
        "colorTextHover"?: string;
        "variant"?: string;
    }
    interface PlzHero {
        "height"?: string;
        "image"?: string;
        "variant"?: string;
    }
    interface PlzMenu {
        "borderMenu"?: string;
    }
    interface PlzMenuItem {
        "active"?: boolean;
        "colorHover"?: string;
        "colorText"?: string;
        "imageUrl"?: string;
        "link"?: string;
        "submenu"?: boolean;
        "target"?: string;
        "variant"?: string;
    }
    interface PlzSection {
        "variant"?: string;
    }
    interface PlzShowcase {
    }
    interface PlzShowcaseCode {
        "textCode"?: string;
        "textSize"?: string;
    }
    interface PlzShowcaseRender {
        "display"?: string;
        "gap"?: string;
        "height"?: string;
        "paddingBottom"?: string;
        "paddingLeft"?: string;
        "paddingRight"?: string;
        "paddingTop"?: string;
        "verticalAlign"?: string;
    }
    interface PlzSidebar {
        "color"?: string;
        "idMain"?: string;
        "spaceTop"?: string;
        "width"?: string;
    }
    interface PlzSpinner {
        "colorPrimary"?: string;
        "colorSecondary"?: string;
        "colorsBola"?: string;
        "variant"?: string;
    }
    interface PlzTooltip {
        "link"?: string;
        "position"?: string;
        "target"?: string;
        "text"?: string;
        "variant"?: 'text' | 'link';
    }
    interface IntrinsicElements {
        "plz-button": PlzButton;
        "plz-card": PlzCard;
        "plz-colors": PlzColors;
        "plz-divider": PlzDivider;
        "plz-dropdown-menu": PlzDropdownMenu;
        "plz-figure": PlzFigure;
        "plz-footer": PlzFooter;
        "plz-header": PlzHeader;
        "plz-hero": PlzHero;
        "plz-menu": PlzMenu;
        "plz-menu-item": PlzMenuItem;
        "plz-section": PlzSection;
        "plz-showcase": PlzShowcase;
        "plz-showcase-code": PlzShowcaseCode;
        "plz-showcase-render": PlzShowcaseRender;
        "plz-sidebar": PlzSidebar;
        "plz-spinner": PlzSpinner;
        "plz-tooltip": PlzTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "plz-button": LocalJSX.PlzButton & JSXBase.HTMLAttributes<HTMLPlzButtonElement>;
            "plz-card": LocalJSX.PlzCard & JSXBase.HTMLAttributes<HTMLPlzCardElement>;
            "plz-colors": LocalJSX.PlzColors & JSXBase.HTMLAttributes<HTMLPlzColorsElement>;
            "plz-divider": LocalJSX.PlzDivider & JSXBase.HTMLAttributes<HTMLPlzDividerElement>;
            "plz-dropdown-menu": LocalJSX.PlzDropdownMenu & JSXBase.HTMLAttributes<HTMLPlzDropdownMenuElement>;
            "plz-figure": LocalJSX.PlzFigure & JSXBase.HTMLAttributes<HTMLPlzFigureElement>;
            "plz-footer": LocalJSX.PlzFooter & JSXBase.HTMLAttributes<HTMLPlzFooterElement>;
            "plz-header": LocalJSX.PlzHeader & JSXBase.HTMLAttributes<HTMLPlzHeaderElement>;
            "plz-hero": LocalJSX.PlzHero & JSXBase.HTMLAttributes<HTMLPlzHeroElement>;
            "plz-menu": LocalJSX.PlzMenu & JSXBase.HTMLAttributes<HTMLPlzMenuElement>;
            "plz-menu-item": LocalJSX.PlzMenuItem & JSXBase.HTMLAttributes<HTMLPlzMenuItemElement>;
            "plz-section": LocalJSX.PlzSection & JSXBase.HTMLAttributes<HTMLPlzSectionElement>;
            "plz-showcase": LocalJSX.PlzShowcase & JSXBase.HTMLAttributes<HTMLPlzShowcaseElement>;
            "plz-showcase-code": LocalJSX.PlzShowcaseCode & JSXBase.HTMLAttributes<HTMLPlzShowcaseCodeElement>;
            "plz-showcase-render": LocalJSX.PlzShowcaseRender & JSXBase.HTMLAttributes<HTMLPlzShowcaseRenderElement>;
            "plz-sidebar": LocalJSX.PlzSidebar & JSXBase.HTMLAttributes<HTMLPlzSidebarElement>;
            "plz-spinner": LocalJSX.PlzSpinner & JSXBase.HTMLAttributes<HTMLPlzSpinnerElement>;
            "plz-tooltip": LocalJSX.PlzTooltip & JSXBase.HTMLAttributes<HTMLPlzTooltipElement>;
        }
    }
}
