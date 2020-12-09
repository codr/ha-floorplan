import { html, LitElement, property, css, CSSResult } from "lit-element";
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import * as hljs from 'highlight.js';

class CodeBlockElement extends LitElement {
  @property({ type: String }) public lang = '';
  @property({ type: String }) public code = '';

  render() {
    const highlightedCode = hljs.highlightAuto(this.code, this.lang ? [this.lang] : undefined).value;

    return html`
      <pre><code>${unsafeHTML(highlightedCode)}</code></pre>
    `;
  }

  static get styles(): CSSResult {
    return css`
      .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: #F0F0F0;
      }
      
      
      /* Base color: saturation 0; */
      
      .hljs,
      .hljs-subst {
        color: #444;
      }
      
      .hljs-comment {
        color: #888888;
      }
      
      .hljs-keyword,
      .hljs-attribute,
      .hljs-selector-tag,
      .hljs-meta-keyword,
      .hljs-doctag,
      .hljs-name {
        font-weight: bold;
      }
      
      
      /* User color: hue: 0 */
      
      .hljs-type,
      .hljs-string,
      .hljs-number,
      .hljs-selector-id,
      .hljs-selector-class,
      .hljs-quote,
      .hljs-template-tag,
      .hljs-deletion {
        color: #880000;
      }
      
      .hljs-title,
      .hljs-section {
        color: #880000;
        font-weight: bold;
      }
      
      .hljs-regexp,
      .hljs-symbol,
      .hljs-variable,
      .hljs-template-variable,
      .hljs-link,
      .hljs-selector-attr,
      .hljs-selector-pseudo {
        color: #BC6060;
      }
      
      
      /* Language color: hue: 90; */
      
      .hljs-literal {
        color: #78A960;
      }
      
      .hljs-built_in,
      .hljs-bullet,
      .hljs-code,
      .hljs-addition {
        color: #397300;
      }
      
      
      /* Meta color: hue: 200 */
      
      .hljs-meta {
        color: #1f7199;
      }
      
      .hljs-meta-string {
        color: #4d99bf;
      }
      
      
      /* Misc effects */
      
      .hljs-emphasis {
        font-style: italic;
      }
      
      .hljs-strong {
        font-weight: bold;
      }
    `;
  }
}

if (!customElements.get('code-block')) {
  customElements.define('code-block', CodeBlockElement);
}

