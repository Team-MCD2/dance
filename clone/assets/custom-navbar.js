/* custom-navbar.js v3
 * Manually toggle .toggled-on class since theme JS might be missing or broken.
 */
(function () {
    function init() {
        console.log('custom-navbar.js init called');
        var nav = document.getElementById('site-navigation');
        var toggle = document.getElementById('menu-toggle') || document.querySelector('.menu-toggle');
        console.log('nav:', nav, 'toggle:', toggle);
        if (!nav || !toggle) return;
        
        var observer = new MutationObserver(function () {
            var open = nav.classList.contains('toggled-on');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            var icon = toggle.querySelector('i');
            if (icon) {
                if (open) {
                    icon.classList.remove('tm-jassio-icon-bars');
                    icon.classList.add('tm-jassio-icon-close');
                } else {
                    icon.classList.remove('tm-jassio-icon-close');
                    icon.classList.add('tm-jassio-icon-bars');
                }
            }
            console.log('MutationObserver observed class change! Classes:', nav.className);
        });
        observer.observe(nav, { attributes: true, attributeFilter: ['class'] });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
