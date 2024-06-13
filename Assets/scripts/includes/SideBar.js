


"use strict";
/* [ properties ]
=================================== */
let sidebarTemplate = `
<link rel="stylesheet" href="../../Assets/css/globals.css">
<home>
    <header>
        <icon page="home.html">
            <icon-img class="material-icons">home</icon-img>
        </icon>
    </header>
    <dummy>
        <icon page="links.html">
            <icon-img class="material-icons">cloud</icon-img>
            <icon-name>Links</icon-name>
        </icon>
        <icon page="drywall.html">
            <icon-img class="material-icons">cloud</icon-img>
            <icon-name>Drywall</icon-name>
        </icon>
    </dummy>
    <footer></footer>
</home>
`;
/* -------------------------------- */


/* [ link template ]
===============================================================================*/
class Sidebar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = sidebarTemplate;
	} 
	connectedCallback() {
		this.render();
		let sidebar = $( "page-header" );

	}
	render() {
	}
}
window.customElements.define( "side-bar", Sidebar );

/* [ events ]
=================================== */
window.addEventListener( "load", ev => {

} );