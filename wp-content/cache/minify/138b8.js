jQuery,astra_builder_widget_css("header");
;!function(){var i=astraBuilderPreview.tablet_break_point||768,r=astraBuilderPreview.mobile_break_point||544;astra_css("astra-settings[mobile-header-toggle-btn-color]","fill",'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg'),astra_css("astra-settings[mobile-header-toggle-btn-color]","color",'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-wrap .mobile-menu'),astra_css("astra-settings[mobile-header-toggle-icon-size]","width",'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg',"px"),astra_css("astra-settings[mobile-header-toggle-icon-size]","height",'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-toggle-icon .ast-mobile-svg',"px"),astra_css("astra-settings[mobile-header-toggle-btn-bg-color]","background",'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle.ast-mobile-menu-trigger-fill'),wp.customize("astra-settings[mobile-header-toggle-btn-border-size]",function(t){t.bind(function(t){var e='[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle.main-header-menu-toggle {',e=(e=(e=(e+="border-top-width:"+t.top+"px;")+("border-right-width:"+t.right+"px;"))+("border-left-width:"+t.left+"px;"))+("border-bottom-width:"+t.bottom+"px;")+"} ";astra_add_dynamic_css("astra-settings[mobile-header-toggle-btn-border-size]",e)})}),wp.customize("astra-settings[mobile-header-toggle-border-radius-fields]",function(t){t.bind(function(t){var e='[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle.main-header-menu-toggle',o=e+"{ border-top-left-radius :"+t.desktop.top+t["desktop-unit"]+"; border-bottom-right-radius :"+t.desktop.bottom+t["desktop-unit"]+"; border-bottom-left-radius :"+t.desktop.left+t["desktop-unit"]+"; border-top-right-radius :"+t.desktop.right+t["desktop-unit"]+"; } ",o=(o+="@media (max-width: "+i+"px) { "+e+"{ border-top-left-radius :"+t.tablet.top+t["tablet-unit"]+"; border-bottom-right-radius :"+t.tablet.bottom+t["tablet-unit"]+"; border-bottom-left-radius :"+t.tablet.left+t["tablet-unit"]+"; border-top-right-radius :"+t.tablet.right+t["tablet-unit"]+"; } } ")+("@media (max-width: "+r+"px) { "+e+"{ border-top-left-radius :"+t.mobile.top+t["mobile-unit"]+"; border-bottom-right-radius :"+t.mobile.bottom+t["mobile-unit"]+"; border-bottom-left-radius :"+t.mobile.left+t["mobile-unit"]+"; border-top-right-radius :"+t.mobile.right+t["mobile-unit"]+"; } } ");astra_add_dynamic_css("astra-settings[mobile-header-toggle-border-radius-fields]",o)})}),astra_css("astra-settings[mobile-header-toggle-border-color]","border-color",'[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle.ast-mobile-menu-trigger-outline, [data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle.ast-mobile-menu-trigger-fill'),wp.customize("astra-settings[section-header-mobile-trigger-margin]",function(t){t.bind(function(t){var e,o;""==t.desktop.bottom&&""==t.desktop.top&&""==t.desktop.left&&""==t.desktop.right&&""==t.tablet.bottom&&""==t.tablet.top&&""==t.tablet.left&&""==t.tablet.right&&""==t.mobile.bottom&&""==t.mobile.top&&""==t.mobile.left&&""==t.mobile.right||(o=(o=(o=(o=(o=(o=(o=(o=(o=(o=(o=(o=(o=(o=(o="")+(e='[data-section="section-header-mobile-trigger"] .ast-button-wrap .menu-toggle.main-header-menu-toggle')+" {margin-left: "+t.desktop.left+t["desktop-unit"]+";")+"margin-right: "+t.desktop.right+t["desktop-unit"]+";")+"margin-top: "+t.desktop.top+t["desktop-unit"]+";")+"margin-bottom: "+t.desktop.bottom+t["desktop-unit"]+";")+"} @media (max-width: "+i+"px) {")+e+" {margin-left: "+t.tablet.left+t["tablet-unit"]+";")+"margin-right: "+t.tablet.right+t["tablet-unit"]+";")+"margin-top: "+t.tablet.top+t["desktop-unit"]+";")+"margin-bottom: "+t.tablet.bottom+t["desktop-unit"]+";} ")+"} @media (max-width: "+r+"px) {")+e+" {margin-left: "+t.mobile.left+t["mobile-unit"]+";")+"margin-right: "+t.mobile.right+t["mobile-unit"]+";")+"margin-top: "+t.mobile.top+t["desktop-unit"]+";")+"margin-bottom: "+t.mobile.bottom+t["desktop-unit"]+";} } ",astra_add_dynamic_css("header-mobile-trigger-margin",o))})}),astra_css("astra-settings[mobile-header-label-font-size]","font-size",'[data-section="section-header-mobile-trigger"] .ast-button-wrap .mobile-menu-wrap .mobile-menu',"px")}(jQuery);
;!function(){var n=AstraBuilderMenuData.tablet_break_point||768,a=AstraBuilderMenuData.mobile_break_point||544,e=".ast-builder-menu-mobile .main-navigation";astra_builder_visibility_css("section-header-mobile-menu",e,"block"),astra_generate_outside_font_family_css("astra-settings[header-mobile-menu-font-family]",e+" .menu-item > .menu-link"),astra_generate_font_weight_css("astra-settings[header-mobile-menu-font-family]","astra-settings[header-mobile-menu-font-weight]","font-weight",e+" .menu-item > .menu-link"),astra_responsive_font_size("astra-settings[header-mobile-menu-font-size]",e+" .menu-item > .menu-link"),astra_font_extras_css("font-extras-header-mobile-menu",".ast-builder-menu-mobile .main-navigation .menu-item > .menu-link"),astra_color_responsive_css("astra-menu-color-preview","astra-settings[header-mobile-menu-color-responsive]","color",e+" .main-header-menu .menu-item > .menu-link"),astra_color_responsive_css("astra-menu-h-color-preview","astra-settings[header-mobile-menu-h-color-responsive]","color",e+" .menu-item:hover > .menu-link, "+e+" .inline-on-mobile .menu-item:hover > .ast-menu-toggle"),astra_color_responsive_css("astra-builder-toggle","astra-settings[header-mobile-menu-color-responsive]","color",e+" .menu-item > .ast-menu-toggle"),astra_color_responsive_css("astra-menu-h-toogle-color-preview","astra-settings[header-mobile-menu-h-color-responsive]","color",e+" .menu-item:hover > .ast-menu-toggle"),astra_color_responsive_css("astra-menu-active-color-preview","astra-settings[header-mobile-menu-a-color-responsive]","color",e+" .menu-item.current-menu-item > .menu-link, "+e+" .inline-on-mobile .menu-item.current-menu-item > .ast-menu-toggle"),astra_apply_responsive_background_css("astra-settings[header-mobile-menu-bg-obj-responsive]",e+" .main-header-menu, "+e+" .main-header-menu .sub-menu","desktop"),astra_apply_responsive_background_css("astra-settings[header-mobile-menu-bg-obj-responsive]",e+" .main-header-menu, "+e+" .main-header-menu .sub-menu","tablet"),astra_apply_responsive_background_css("astra-settings[header-mobile-menu-bg-obj-responsive]",e+" .main-header-menu, "+e+" .main-header-menu .sub-menu","mobile"),astra_color_responsive_css("astra-menu-bg-preview","astra-settings[header-mobile-menu-h-bg-color-responsive]","background",e+" .menu-item:hover > .menu-link, "+e+" .inline-on-mobile .menu-item:hover > .ast-menu-toggle"),astra_color_responsive_css("astra-builder","astra-settings[header-mobile-menu-a-bg-color-responsive]","background",e+" .menu-item.current-menu-item > .menu-link, "+e+" .inline-on-mobile .menu-item.current-menu-item > .ast-menu-toggle"),wp.customize("astra-settings[header-mobile-menu-submenu-item-b-size]",function(e){e.bind(function(e){var t=".ast-hfb-header .ast-builder-menu-mobile .main-navigation",i=(i=(i=(i="")+(t+" .main-header-menu {")+("border-top-width: "+e+"px;"))+"} "+(t+" .menu-item .sub-menu .menu-link, "+t+" .menu-item .menu-link {"))+("border-bottom-width: "+e+"px;")+"} ";astra_add_dynamic_css("header-mobile-menu-submenu-item-b-size",i)})}),wp.customize("astra-settings[header-mobile-menu-submenu-border]",function(e){e.bind(function(e){var t=".ast-builder-menu-mobile  .sub-menu {",t=(t=(t=(t+="border-top-width:"+e.top+"px;")+("border-right-width:"+e.right+"px;"))+("border-left-width:"+e.left+"px;")+"border-style: solid;")+("border-bottom-width:"+e.bottom+"px;")+"}";astra_add_dynamic_css("header-mobile-menu-submenu-border",t)})}),wp.customize("astra-settings[header-mobile-menu-menu-spacing]",function(e){e.bind(function(e){var t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t="")+".ast-hfb-header .ast-builder-menu-mobile .main-header-menu .menu-item > .menu-link {"+("padding-left: "+e.desktop.left+e["desktop-unit"]+";"))+("padding-right: "+e.desktop.right+e["desktop-unit"]+";"))+("padding-top: "+e.desktop.top+e["desktop-unit"]+";"))+("padding-bottom: "+e.desktop.bottom+e["desktop-unit"]+";")+"} ")+".ast-hfb-header .ast-builder-menu-mobile .main-navigation ul .menu-item.menu-item-has-children > .ast-menu-toggle {"+("top: "+e.desktop.top+e["desktop-unit"]+";"))+("right: calc( "+e.desktop.right+e["desktop-unit"]+" - 0.907em );"))+"} "+("@media (max-width: "+n+"px) {"))+".ast-header-break-point .ast-builder-menu-mobile .main-header-menu .menu-item > .menu-link {"+("padding-left: "+e.tablet.left+e["tablet-unit"]+";"))+("padding-right: "+e.tablet.right+e["tablet-unit"]+";"))+("padding-top: "+e.tablet.top+e["tablet-unit"]+";"))+("padding-bottom: "+e.tablet.bottom+e["tablet-unit"]+";")+"} ")+".ast-hfb-header .ast-builder-menu-mobile .main-navigation ul .menu-item.menu-item-has-children > .ast-menu-toggle {"+("top: "+e.tablet.top+e["tablet-unit"]+";"))+("right: calc( "+e.tablet.right+e["tablet-unit"]+" - 0.907em );")+"} ")+"} "+("@media (max-width: "+a+"px) {"))+".ast-header-break-point .ast-builder-menu-mobile .main-header-menu .menu-item > .menu-link {"+("padding-left: "+e.mobile.left+e["mobile-unit"]+";"))+("padding-right: "+e.mobile.right+e["mobile-unit"]+";"))+("padding-top: "+e.mobile.top+e["mobile-unit"]+";"))+("padding-bottom: "+e.mobile.bottom+e["mobile-unit"]+";")+"} ")+".ast-hfb-header .ast-builder-menu-mobile .main-navigation ul .menu-item.menu-item-has-children > .ast-menu-toggle {"+("top: "+e.mobile.top+e["mobile-unit"]+";"))+("right: calc( "+e.mobile.right+e["mobile-unit"]+" - 0.907em );"))+"} "+"} ";astra_add_dynamic_css("header-mobile-menu-menu-spacing-toggle-button",t)})}),wp.customize("astra-settings[section-header-mobile-menu-margin]",function(e){e.bind(function(e){var t=".ast-builder-menu-mobile .main-header-menu, .ast-header-break-point .ast-builder-menu-mobile .main-header-menu",i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i=(i="")+(t+" {")+("margin-left: "+e.desktop.left+e["desktop-unit"]+";"))+("margin-right: "+e.desktop.right+e["desktop-unit"]+";"))+("margin-top: "+e.desktop.top+e["desktop-unit"]+";"))+("margin-bottom: "+e.desktop.bottom+e["desktop-unit"]+";"))+"} "+("@media (max-width: "+n+"px) {"))+(t+" {")+("margin-left: "+e.tablet.left+e["tablet-unit"]+";"))+("margin-right: "+e.tablet.right+e["tablet-unit"]+";"))+("margin-top: "+e.tablet.top+e["desktop-unit"]+";"))+("margin-bottom: "+e.tablet.bottom+e["desktop-unit"]+";")+"} ")+"} "+("@media (max-width: "+a+"px) {"))+(t+" {")+("margin-left: "+e.mobile.left+e["mobile-unit"]+";"))+("margin-right: "+e.mobile.right+e["mobile-unit"]+";"))+("margin-top: "+e.mobile.top+e["desktop-unit"]+";"))+("margin-bottom: "+e.mobile.bottom+e["desktop-unit"]+";"))+"} "+"} ";astra_add_dynamic_css("section-header-mobile-menu-margin",i)})}),wp.customize("astra-settings[header-mobile-menu-submenu-item-b-color]",function(e){e.bind(function(e){var t,i=wp.customize("astra-settings[header-mobile-menu-submenu-item-border]").get(),n=wp.customize("astra-settings[header-mobile-menu-submenu-item-b-size]").get();""!=e&&1==i?(t="",t=(t=(t=(t=(t+=".ast-hfb-header .ast-builder-menu-mobile .main-navigation .menu-item .sub-menu .menu-link, .ast-hfb-header .ast-builder-menu-mobile .main-navigation .menu-item .menu-link")+"{border-bottom-width:"+(!0===i?n+"px;":"0px;"))+"border-color:"+e+";border-style: solid;}.ast-hfb-header .ast-builder-menu-mobile .main-navigation .main-header-menu")+"{border-top-width:"+(!0===i?n+"px;":"0px;"))+"border-color:"+e+";}",astra_add_dynamic_css("header-mobile-menu-submenu-item-b-color",t)):wp.customize.preview.send("refresh")})}),wp.customize("astra-settings[header-mobile-menu-submenu-item-border]",function(e){e.bind(function(e){var t,i=wp.customize("astra-settings[header-mobile-menu-submenu-item-b-color]").get(),n=wp.customize("astra-settings[header-mobile-menu-submenu-item-b-size]").get();!0===e?(t=".ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item .sub-menu .menu-link, .ast-builder-menu-mobile .main-navigation .main-header-menu .menu-item .menu-link",t=(t=(t=(t+="{")+"border-bottom-width:"+(!0===e?n+"px;":"0px;")+"border-color:"+i+";border-style: solid;}.ast-builder-menu-mobile .main-navigation .main-header-menu{")+"border-top-width:"+(!0===e?n+"px;":"0px;")+"border-style: solid;")+"border-color:"+i+";}",astra_add_dynamic_css("header-mobile-menu-submenu-item-border",t)):wp.customize.preview.send("refresh")})}),astra_css("astra-settings[header-mobile-menu-submenu-b-color]","border-color",e+" li.menu-item .sub-menu, "+e+" .main-header-menu"),astra_color_responsive_css("astra-builder-transparent-submenu","astra-settings[transparent-submenu-h-color-responsive]","color",".ast-theme-transparent-header .main-header-menu .menu-item .sub-menu .menu-item:hover > .menu-link")}(jQuery);
;!function(){var r=astraBuilderPreview.tablet_break_point||768,t=astraBuilderPreview.mobile_break_point||544;wp.customize("astra-settings[hba-header-height]",function(a){a.bind(function(a){var e;""==a.desktop&&""==a.tablet&&""==a.mobile||(e=(e=(e=(e=(e=(e=(e="")+".ast-above-header-bar .site-above-header-wrap, .ast-mobile-header-wrap .ast-above-header-bar{min-height: "+a.desktop+"px;} .ast-desktop .ast-above-header-bar .main-header-menu > .menu-item {")+"line-height: "+a.desktop+"px;} ")+"@media (max-width: "+r+"px) {.ast-above-header-bar .site-above-header-wrap, .ast-mobile-header-wrap .ast-above-header-bar{")+"min-height: "+a.tablet+"px;} ")+"} @media (max-width: "+t+"px) {")+".ast-above-header-bar .site-above-header-wrap, .ast-mobile-header-wrap .ast-above-header-bar{min-height: "+a.mobile+"px;} } ",astra_add_dynamic_css("hba-header-height",e))})}),wp.customize("astra-settings[hba-header-separator]",function(a){a.bind(function(a){var e="",e=(e=(e+=".ast-above-header.ast-above-header-bar, .ast-above-header-bar {")+("border-bottom-width: "+a+"px;")+"border-bottom-style: solid;")+("border-color:"+wp.customize("astra-settings[hba-header-bottom-border-color]").get()+";")+"}";astra_add_dynamic_css("hba-header-separator",e)})}),astra_css("astra-settings[hba-header-bottom-border-color]","border-color",".ast-above-header.ast-above-header-bar, .ast-above-header-bar"),astra_apply_responsive_background_css("astra-settings[hba-header-bg-obj-responsive]",".ast-above-header.ast-above-header-bar","desktop"),astra_apply_responsive_background_css("astra-settings[hba-header-bg-obj-responsive]",".ast-above-header.ast-above-header-bar","tablet"),astra_apply_responsive_background_css("astra-settings[hba-header-bg-obj-responsive]",".ast-above-header.ast-above-header-bar","mobile"),astra_builder_advanced_css("section-above-header-builder",".ast-above-header.ast-above-header-bar, .ast-header-break-point #masthead.site-header .ast-above-header-bar"),astra_builder_visibility_css("section-above-header-builder",".ast-above-header-bar","grid")}(jQuery);
;!function(){var r=astraBuilderPreview.tablet_break_point||768,t=astraBuilderPreview.mobile_break_point||544;wp.customize("astra-settings[hbb-header-height]",function(e){e.bind(function(e){var a;""==e.desktop&&""==e.tablet&&""==e.mobile||(a=(a=(a=(a=(a=(a=(a="")+".ast-below-header-bar .site-below-header-wrap, .ast-mobile-header-wrap .ast-below-header-bar {min-height: "+e.desktop+"px;} .ast-desktop .ast-below-header-bar .main-header-menu > .menu-item {")+"line-height: "+e.desktop+"px;} ")+"@media (max-width: "+r+"px) {.ast-below-header-bar .site-below-header-wrap, .ast-mobile-header-wrap .ast-below-header-bar  {")+"min-height: "+e.tablet+"px;} ")+"} @media (max-width: "+t+"px) {")+".ast-below-header-bar .site-below-header-wrap, .ast-mobile-header-wrap .ast-below-header-bar  {min-height: "+e.mobile+"px;} } ",astra_add_dynamic_css("hbb-header-height",a))})}),wp.customize("astra-settings[hbb-header-separator]",function(e){e.bind(function(e){var a="",a=(a=(a+=".ast-header-break-point .ast-below-header-bar, .ast-below-header-bar {")+("border-bottom-width: "+e+"px;")+"border-bottom-style: solid;")+("border-color:"+wp.customize("astra-settings[hbb-header-bottom-border-color]").get()+";")+"}";astra_add_dynamic_css("hbb-header-separator",a)})}),astra_css("astra-settings[hbb-header-bottom-border-color]","border-color",".ast-header-break-point .ast-below-header-bar, .ast-below-header-bar"),astra_apply_responsive_background_css("astra-settings[hbb-header-bg-obj-responsive]",".ast-below-header.ast-below-header-bar","desktop"),astra_apply_responsive_background_css("astra-settings[hbb-header-bg-obj-responsive]",".ast-below-header.ast-below-header-bar","tablet"),astra_apply_responsive_background_css("astra-settings[hbb-header-bg-obj-responsive]",".ast-below-header.ast-below-header-bar","mobile"),astra_builder_advanced_css("section-below-header-builder",".ast-below-header.ast-below-header-bar"),astra_builder_visibility_css("section-below-header-builder",".ast-below-header-bar","grid")}(jQuery);
;!function(){var o=astraBuilderPreview.tablet_break_point||768,a=astraBuilderPreview.mobile_break_point||544,t="section-below-footer-builder",i='.site-below-footer-wrap[data-section="section-below-footer-builder"]';astra_css("astra-settings[hbb-footer-vertical-alignment]","align-items",i+" .ast-builder-grid-row, "+i+" .site-footer-section"),wp.customize("astra-settings[hbb-inner-spacing]",function(t){t.bind(function(t){var r="";""!=t.desktop&&(r=(r+=i+" .ast-builder-grid-row {")+"grid-column-gap: "+t.desktop+"px;} "),""!=t.tablet&&(r=(r=(r+="@media (max-width: "+o+"px) {")+i+" .ast-builder-grid-row {grid-column-gap: "+t.tablet+"px;")+"grid-row-gap: "+t.tablet+"px;} } "),""!=t.mobile&&(r=(r=(r+="@media (max-width: "+a+"px) {")+i+" .ast-builder-grid-row {grid-column-gap: "+t.mobile+"px;")+"grid-row-gap: "+t.mobile+"px;} } "),astra_add_dynamic_css("hbb-inner-spacing-toggle-button",r)})}),wp.customize("astra-settings[hbb-footer-separator]",function(t){t.bind(function(t){var r="";""!==t&&(r=(r=i+" {")+"border-top-width: "+t+"px;border-top-style: solid} "),astra_add_dynamic_css("hbb-footer-separator",r)})}),wp.customize("astra-settings[hbb-footer-top-border-color]",function(t){t.bind(function(t){var r="";""!==t&&(r=(r=i+" {")+"border-top-color: "+t+";border-top-style: solid} "),astra_add_dynamic_css("hbb-footer-top-border-color",r)})}),wp.customize("astra-settings[hbb-footer-layout-width]",function(t){t.bind(function(t){var r="";"content"==t&&(r=(r=i+" .ast-builder-grid-row {")+"max-width: "+AstraBuilderPrimaryFooterData.footer_content_width+"px;margin-left: auto;margin-right: auto;} "),"full"==t&&(r=i+" .ast-builder-grid-row {",r+="max-width: 100%;padding-right: 35px; padding-left: 35px;} "),astra_add_dynamic_css("hbb-footer-layout-width",r)})}),astra_apply_responsive_background_css("astra-settings[hbb-footer-bg-obj-responsive]",i,"desktop"),astra_apply_responsive_background_css("astra-settings[hbb-footer-bg-obj-responsive]",i,"tablet"),astra_apply_responsive_background_css("astra-settings[hbb-footer-bg-obj-responsive]",i,"mobile"),astra_builder_advanced_css(t,i),astra_builder_visibility_css(t,i,"grid")}(jQuery);
;!function(){var o="#astra-footer-menu",i=astraBuilderPreview.tablet_break_point||768,a=astraBuilderPreview.mobile_break_point||544;wp.customize("astra-settings[footer-menu-alignment]",function(t){t.bind(function(t){var e;""==t.desktop&&""==t.tablet&&""==t.mobile||(e="",e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e+='.footer-widget-area[data-section="section-footer-menu"] .astra-footer-vertical-menu .menu-item {')+"align-items: "+t.desktop+";} ")+'.footer-widget-area[data-section="section-footer-menu"] .astra-footer-horizontal-menu {justify-content: '+t.desktop+";")+"} @media (max-width: "+i+"px) {")+'.footer-widget-area[data-section="section-footer-menu"] .astra-footer-tablet-vertical-menu {justify-content:'+t.tablet+';} .footer-widget-area[data-section="section-footer-menu"] .astra-footer-tablet-vertical-menu .menu-item {')+"display:grid;justify-content:"+t.tablet+";")+"align-items: "+t.tablet+";} ")+'.footer-widget-area[data-section="section-footer-menu"] .astra-footer-tablet-horizontal-menu {justify-content: '+t.tablet+";display: flex;} ")+"} @media (max-width: "+a+'px) {.footer-widget-area[data-section="section-footer-menu"] .astra-footer-mobile-vertical-menu {display:grid;')+"justify-content:"+t.mobile+";} ")+'.footer-widget-area[data-section="section-footer-menu"] .astra-footer-mobile-vertical-menu .menu-item {justify-content:'+t.mobile+";")+"align-items: "+t.mobile+';} .footer-widget-area[data-section="section-footer-menu"] .astra-footer-mobile-horizontal-menu {')+"justify-content: "+t.mobile+";display: flex;} } ",astra_add_dynamic_css("footer-menu-alignment",e))})}),astra_responsive_font_size("astra-settings[footer-menu-font-size]",o+" .menu-item > a"),astra_color_responsive_css("astra-footer-menu-preview","astra-settings[footer-menu-color-responsive]","color",o+" .menu-item > a"),astra_color_responsive_css("astra-footer-menu-preview","astra-settings[footer-menu-h-color-responsive]","color",o+" .menu-item:hover > a"),astra_color_responsive_css("astra-footer-menu-preview","astra-settings[footer-menu-a-color-responsive]","color",o+" .menu-item.current-menu-item > a"),astra_apply_responsive_background_css("astra-settings[footer-menu-bg-obj-responsive]",o,"desktop"),astra_apply_responsive_background_css("astra-settings[footer-menu-bg-obj-responsive]",o,"tablet"),astra_apply_responsive_background_css("astra-settings[footer-menu-bg-obj-responsive]",o,"mobile"),astra_color_responsive_css("astra-footer-menu-preview","astra-settings[footer-menu-h-bg-color-responsive]","background",o+" .menu-item:hover > a"),astra_color_responsive_css("astra-footer-menu-preview","astra-settings[footer-menu-a-bg-color-responsive]","background",o+" .menu-item.current-menu-item > a"),wp.customize("astra-settings[footer-main-menu-spacing]",function(t){t.bind(function(t){var e;""==t.desktop.bottom&&""==t.desktop.top&&""==t.desktop.left&&""==t.desktop.right&&""==t.tablet.bottom&&""==t.tablet.top&&""==t.tablet.left&&""==t.tablet.right&&""==t.mobile.bottom&&""==t.mobile.top&&""==t.mobile.left&&""==t.mobile.right||(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e="")+o+" .menu-item > a {padding-left: "+t.desktop.left+t["desktop-unit"]+";")+"padding-right: "+t.desktop.right+t["desktop-unit"]+";")+"padding-top: "+t.desktop.top+t["desktop-unit"]+";")+"padding-bottom: "+t.desktop.bottom+t["desktop-unit"]+";")+"} @media (max-width: "+i+"px) {")+o+" .menu-item > a {padding-left: "+t.tablet.left+t["tablet-unit"]+";")+"padding-right: "+t.tablet.right+t["tablet-unit"]+";")+"padding-top: "+t.tablet.top+t["tablet-unit"]+";")+"padding-bottom: "+t.tablet.bottom+t["tablet-unit"]+";} ")+"} @media (max-width: "+a+"px) {")+o+" .menu-item > a {padding-left: "+t.mobile.left+t["mobile-unit"]+";")+"padding-right: "+t.mobile.right+t["mobile-unit"]+";")+"padding-top: "+t.mobile.top+t["mobile-unit"]+";")+"padding-bottom: "+t.mobile.bottom+t["mobile-unit"]+";} } ",astra_add_dynamic_css("footer-menu-spacing",e))})}),wp.customize("astra-settings[section-footer-menu-margin]",function(t){t.bind(function(t){var e;""==t.desktop.bottom&&""==t.desktop.top&&""==t.desktop.left&&""==t.desktop.right&&""==t.tablet.bottom&&""==t.tablet.top&&""==t.tablet.left&&""==t.tablet.right&&""==t.mobile.bottom&&""==t.mobile.top&&""==t.mobile.left&&""==t.mobile.right||(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e="")+o+" {margin-left: "+t.desktop.left+t["desktop-unit"]+";")+"margin-right: "+t.desktop.right+t["desktop-unit"]+";")+"margin-top: "+t.desktop.top+t["desktop-unit"]+";")+"margin-bottom: "+t.desktop.bottom+t["desktop-unit"]+";")+"} @media (max-width: "+i+"px) {")+o+" {margin-left: "+t.tablet.left+t["tablet-unit"]+";")+"margin-right: "+t.tablet.right+t["tablet-unit"]+";")+"margin-top: "+t.tablet.top+t["desktop-unit"]+";")+"margin-bottom: "+t.tablet.bottom+t["desktop-unit"]+";} ")+"} @media (max-width: "+a+"px) {")+o+" {margin-left: "+t.mobile.left+t["mobile-unit"]+";")+"margin-right: "+t.mobile.right+t["mobile-unit"]+";")+"margin-top: "+t.mobile.top+t["desktop-unit"]+";")+"margin-bottom: "+t.mobile.bottom+t["desktop-unit"]+";} } ",astra_add_dynamic_css("section-footer-menu-margin",e))})}),astra_builder_visibility_css("section-footer-menu",'.footer-widget-area[data-section="section-footer-menu"]',"block")}(jQuery);