function astra_dynamic_build_css(n,r,i,o,t=!1){var c=AstraPostStrcturesData.tablet_break_point||768,y=AstraPostStrcturesData.mobile_break_point||544,d=t||"";wp.customize(r,function(t){t.bind(function(t){var a,e,s;t.desktop||t.mobile||t.tablet?(r=(r=r.replace("[","-")).replace("]",""),jQuery("style#"+r+"-dynamic-preview-css").remove(),(s=e=a="")!=t.desktop&&(a=i+": "+t.desktop),""!=t.tablet&&(e=i+": "+t.tablet),""!=t.mobile&&(s=i+": "+t.mobile),jQuery("head").append('<style id="'+r+'-dynamic-preview-css">'+o+" { "+a+d+" }@media (max-width: "+c+"px) {"+o+" { "+e+d+" } }@media (max-width: "+y+"px) {"+o+" { "+s+d+" } }</style>")):jQuery("style#"+r+"-"+n).remove()})})}function astra_refresh_customizer(t){wp.customize(t,function(t){t.bind(function(t){console.error(t),wp.customize.preview.send("refresh")})})}!function(){for(var t=AstraPostStrcturesData.post_types.length||!1,a=AstraPostStrcturesData.post_types||[],e=AstraPostStrcturesData.tablet_break_point||768,s=AstraPostStrcturesData.mobile_break_point||544,n=0;n<t;n++){var r=a[n],i=void 0!==wp.customize("astra-settings[ast-dynamic-single-"+r+"-layout]")?wp.customize("astra-settings[ast-dynamic-single-"+r+"-layout]").get():"both",o=AstraPostStrcturesData.enabled_related_post?":not(.related-entry-header)":"";let t="";t="layout-2"===i?'body .ast-single-entry-banner[data-post-type="'+r+'"]':"layout-1"===i?"header.entry-header"+o:'body .ast-single-entry-banner[data-post-type="'+r+'"], header.entry-header',astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-meta-date-type]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-article-featured-image-position-layout-1]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-article-featured-image-position-layout-2]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-article-featured-image-width-type]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-article-featured-image-ratio-type]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-article-featured-image-ratio-pre-scale]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-article-featured-image-custom-scale-width]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-article-featured-image-custom-scale-height]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-article-featured-image-size]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-date-format]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-taxonomy]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-taxonomy-1]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-taxonomy-2]"),astra_dynamic_build_css("ast-dynamic-single-"+r+"-horizontal-alignment","astra-settings[ast-dynamic-single-"+r+"-horizontal-alignment]","text-align",t),astra_dynamic_build_css("ast-dynamic-single-"+r+"-banner-height","astra-settings[ast-dynamic-single-"+r+"-banner-height]","min-height",t,"px"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-featured-as-background]"),astra_refresh_customizer("astra-settings[ast-dynamic-single-"+r+"-banner-featured-overlay]"),astra_apply_responsive_background_css("astra-settings[ast-dynamic-single-"+r+"-banner-background]",' body .ast-single-entry-banner[data-post-type="'+r+'"]',"desktop"),astra_apply_responsive_background_css("astra-settings[ast-dynamic-single-"+r+"-banner-background]",' body .ast-single-entry-banner[data-post-type="'+r+'"]',"tablet"),astra_apply_responsive_background_css("astra-settings[ast-dynamic-single-"+r+"-banner-background]",' body .ast-single-entry-banner[data-post-type="'+r+'"]',"mobile"),astra_css("astra-settings[ast-dynamic-single-"+r+"-vertical-alignment]","justify-content",'body .ast-single-entry-banner[data-post-type="'+r+'"]'),astra_css("astra-settings[ast-dynamic-single-"+r+"-banner-custom-width]","max-width",'body .ast-single-entry-banner[data-post-type="'+r+'"][data-banner-width-type="custom"]',"px"),astra_css("astra-settings[ast-dynamic-single-"+r+"-elements-gap]","margin-bottom",' header.entry-header > *:not(:last-child), body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container > *:not(:last-child)',"px"),astra_css("astra-settings[ast-dynamic-single-"+r+"-banner-text-color]","color",' header.entry-header *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container *'),astra_css("astra-settings[ast-dynamic-single-"+r+"-banner-title-color]","color",' header.entry-header .entry-title, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-title'),astra_css("astra-settings[ast-dynamic-single-"+r+"-banner-link-color]","color",'body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container a, header.entry-header a, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container a *, header.entry-header a *'),astra_css("astra-settings[ast-dynamic-single-"+r+"-banner-link-hover-color]","color",'body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container a:hover, header.entry-header a:hover, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container a:hover *, header.entry-header a:hover *'),astra_responsive_spacing("astra-settings[ast-dynamic-single-"+r+"-banner-padding]",'body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container',"padding",["top","right","bottom","left"]),astra_responsive_spacing("astra-settings[ast-dynamic-single-"+r+"-banner-margin]",'body .ast-single-entry-banner[data-post-type="'+r+'"]',"margin",["top","right","bottom","left"]),astra_generate_outside_font_family_css("astra-settings[ast-dynamic-single-"+r+"-title-font-family]",' header.entry-header .entry-title, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-title'),astra_generate_font_weight_css("astra-settings[ast-dynamic-single-"+r+"-title-font-family]","astra-settings[ast-dynamic-single-"+r+"-title-font-weight]","font-weight",' header.entry-header .entry-title, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-title'),astra_css("astra-settings[ast-dynamic-single-"+r+"-title-font-weight]","font-weight",' header.entry-header .entry-title, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-title'),astra_responsive_font_size("astra-settings[ast-dynamic-single-"+r+"-title-font-size]",' header.entry-header .entry-title, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-title'),astra_font_extras_css("ast-dynamic-single-"+r+"-title-font-extras",' header.entry-header .entry-title, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-title'),astra_generate_outside_font_family_css("astra-settings[ast-dynamic-single-"+r+"-text-font-family]",' header.entry-header *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container *'),astra_generate_font_weight_css("astra-settings[ast-dynamic-single-"+r+"-text-font-family]","astra-settings[ast-dynamic-single-"+r+"-text-font-weight]","font-weight",' header.entry-header *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container *'),astra_css("astra-settings[ast-dynamic-single-"+r+"-text-font-weight]","font-weight",' header.entry-header *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container *'),astra_responsive_font_size("astra-settings[ast-dynamic-single-"+r+"-text-font-size]",' header.entry-header *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container *'),astra_font_extras_css("ast-dynamic-single-"+r+"-text-font-extras",' header.entry-header *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container *'),astra_generate_outside_font_family_css("astra-settings[ast-dynamic-single-"+r+"-meta-font-family]",' header.entry-header .entry-meta, header.entry-header .entry-meta *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta *'),astra_generate_font_weight_css("astra-settings[ast-dynamic-single-"+r+"-meta-font-family]","astra-settings[ast-dynamic-single-"+r+"-meta-font-weight]","font-weight",' header.entry-header .entry-meta, header.entry-header .entry-meta *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta *'),astra_css("astra-settings[ast-dynamic-single-"+r+"-meta-font-weight]","font-weight",' header.entry-header .entry-meta, header.entry-header .entry-meta *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta *'),astra_responsive_font_size("astra-settings[ast-dynamic-single-"+r+"-meta-font-size]",' header.entry-header .entry-meta, header.entry-header .entry-meta *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta *'),astra_font_extras_css("ast-dynamic-single-"+r+"-meta-font-extras",' header.entry-header .entry-meta, header.entry-header .entry-meta *, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta, body .ast-single-entry-banner[data-post-type="'+r+'"] .ast-container .entry-meta *')}for(n=0;n<t;n++){var c,r=a[n],i=void 0!==wp.customize("astra-settings[ast-dynamic-archive-"+r+"-layout]")?wp.customize("astra-settings[ast-dynamic-archive-"+r+"-layout]").get():"both",y="sc_product"===r?"body.page":"body.archive";c="layout-2"===i?'body .ast-archive-entry-banner[data-post-type="'+r+'"]':"layout-1"===i?y+" .ast-archive-description":'body .ast-archive-entry-banner[data-post-type="'+r+'"], '+y+" .ast-archive-description",astra_refresh_customizer("astra-settings[ast-dynamic-archive-"+r+"-custom-title]"),astra_refresh_customizer("astra-settings[ast-dynamic-archive-"+r+"-custom-description]"),astra_dynamic_build_css("ast-dynamic-archive-"+r+"-horizontal-alignment","astra-settings[ast-dynamic-archive-"+r+"-horizontal-alignment]","text-align",c),astra_dynamic_build_css("ast-dynamic-archive-"+r+"-banner-height","astra-settings[ast-dynamic-archive-"+r+"-banner-height]","min-height",c,"px"),wp.customize("astra-settings[ast-dynamic-archive-"+r+"banner-width-type]",function(t){t.bind(function(t){var a;"custom"===t?(jQuery('body .ast-archive-entry-banner[data-post-type="'+r+'"]').attr("data-banner-width-type","custom"),t=wp.customize("astra-settings[ast-dynamic-archive-"+r+"banner-custom-width]").get(),a="",a=(a+='body .ast-archive-entry-banner[data-post-type="'+r+'"][data-banner-width-type="custom"] {')+"max-width: "+t+"px;} ",astra_add_dynamic_css("ast-dynamic-archive-"+r+"-banner-width-type",a)):jQuery('body .ast-archive-entry-banner[data-post-type="'+r+'"]').attr("data-banner-width-type","full")})}),wp.customize("astra-settings[ast-dynamic-archive-"+r+"-banner-height]",function(t){t.bind(function(t){var a;""==t.desktop&&""==t.tablet&&""==t.mobile||(a="",a=(a=(a=(a=(a=(a+='body .ast-archive-entry-banner[data-post-type="'+r+'"] {')+"min-height: "+t.desktop+"px;} ")+"@media (max-width: "+e+'px) {body .ast-archive-entry-banner[data-post-type="'+r+'"] {')+"min-height: "+t.tablet+"px;} ")+"} @media (max-width: "+s+"px) {")+'body .ast-archive-entry-banner[data-post-type="'+r+'"] {min-height: '+t.mobile+"px;} } ",astra_add_dynamic_css("ast-dynamic-archive-"+r+"-banner-height",a))})}),astra_css("astra-settings[ast-dynamic-archive-"+r+"-vertical-alignment]","justify-content",c),astra_css("astra-settings[ast-dynamic-archive-"+r+"-banner-custom-width]","max-width",'body .ast-archive-entry-banner[data-post-type="'+r+'"][data-banner-width-type="custom"]',"px"),astra_css("astra-settings[ast-dynamic-archive-"+r+"-elements-gap]","margin-bottom",y+' .ast-archive-description > *:not(:last-child), body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container > *:not(:last-child)',"px"),astra_css("astra-settings[ast-dynamic-archive-"+r+"-banner-text-color]","color",'body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container *, '+y+" .ast-archive-description *"),astra_css("astra-settings[ast-dynamic-archive-"+r+"-banner-title-color]","color",'body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container h1, '+y+' .ast-archive-description .ast-archive-title, body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container h1 *, '+y+" .ast-archive-description .ast-archive-title *"),astra_css("astra-settings[ast-dynamic-archive-"+r+"-banner-link-color]","color",'body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container a, '+y+' .ast-archive-description a, body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container a *, '+y+" .ast-archive-description a *"),astra_css("astra-settings[ast-dynamic-archive-"+r+"-banner-link-hover-color]","color",'body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container a:hover, '+y+' .ast-archive-description a:hover, body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container a:hover *, '+y+" .ast-archive-description a:hover *"),astra_apply_responsive_background_css("astra-settings[ast-dynamic-archive-"+r+"-banner-custom-bg]",'body .ast-archive-entry-banner[data-post-type="'+r+'"], '+y+" .ast-archive-description","desktop"),astra_apply_responsive_background_css("astra-settings[ast-dynamic-archive-"+r+"-banner-custom-bg]",'body .ast-archive-entry-banner[data-post-type="'+r+'"], '+y+" .ast-archive-description","tablet"),astra_apply_responsive_background_css("astra-settings[ast-dynamic-archive-"+r+"-banner-custom-bg]",'body .ast-archive-entry-banner[data-post-type="'+r+'"], '+y+" .ast-archive-description","mobile"),astra_responsive_spacing("astra-settings[ast-dynamic-archive-"+r+"-banner-padding]",'body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container, '+y+" .ast-archive-description","padding",["top","right","bottom","left"]),astra_responsive_spacing("astra-settings[ast-dynamic-archive-"+r+"-banner-margin]",'body .ast-archive-entry-banner[data-post-type="'+r+'"], '+y+" .ast-archive-description","margin",["top","right","bottom","left"]),astra_generate_outside_font_family_css("astra-settings[ast-dynamic-archive-"+r+"-title-font-family]",'body .ast-archive-entry-banner[data-post-type="'+r+'"] h1, '+y+' .ast-archive-description h1, body .ast-archive-entry-banner[data-post-type="'+r+'"] h1 *, '+y+" .ast-archive-description h1 *"),astra_generate_font_weight_css("astra-settings[ast-dynamic-archive-"+r+"-title-font-family]","astra-settings[ast-dynamic-archive-"+r+"-title-font-weight]","font-weight",'body .ast-archive-entry-banner[data-post-type="'+r+'"] h1, '+y+' .ast-archive-description h1, body .ast-archive-entry-banner[data-post-type="'+r+'"] h1 *, '+y+" .ast-archive-description h1 *"),astra_css("astra-settings[ast-dynamic-archive-"+r+"-title-font-weight]","font-weight",'body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container h1, '+y+' .ast-archive-description h1, body .ast-archive-entry-banner[data-post-type="'+r+'"] h1 *, '+y+" .ast-archive-description h1 *"),astra_responsive_font_size("astra-settings[ast-dynamic-archive-"+r+"-title-font-size]",'body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container h1, '+y+' .ast-archive-description .ast-archive-title, body .ast-archive-entry-banner[data-post-type="'+r+'"] h1 *, '+y+" .ast-archive-description .ast-archive-title *"),astra_font_extras_css("ast-dynamic-archive-"+r+"-title-font-extras",'body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container h1, '+y+' .ast-archive-description .ast-archive-title, body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container h1 *, '+y+" .ast-archive-description h1 *"),astra_generate_outside_font_family_css("astra-settings[ast-dynamic-archive-"+r+"-text-font-family]",'body .ast-archive-entry-banner[data-post-type="'+r+'"], body .ast-archive-entry-banner[data-post-type="'+r+'"] *, '+y+" .ast-archive-description, "+y+" .ast-archive-description *"),astra_generate_font_weight_css("astra-settings[ast-dynamic-archive-"+r+"-text-font-family]","astra-settings[ast-dynamic-archive-"+r+"-text-font-weight]","font-weight",'body .ast-archive-entry-banner[data-post-type="'+r+'"], body .ast-archive-entry-banner[data-post-type="'+r+'"] *, '+y+" .ast-archive-description, "+y+" .ast-archive-description *"),astra_css("astra-settings[ast-dynamic-archive-"+r+"-text-font-weight]","font-weight",'body .ast-archive-entry-banner[data-post-type="'+r+'"], body .ast-archive-entry-banner[data-post-type="'+r+'"] *, '+y+" .ast-archive-description, "+y+" .ast-archive-description *"),astra_responsive_font_size("astra-settings[ast-dynamic-archive-"+r+"-text-font-size]",'body .ast-archive-entry-banner[data-post-type="'+r+'"], body .ast-archive-entry-banner[data-post-type="'+r+'"] *, '+y+" .ast-archive-description, "+y+" .ast-archive-description *"),astra_font_extras_css("ast-dynamic-archive-"+r+"-text-font-extras",'body .ast-archive-entry-banner[data-post-type="'+r+'"] .ast-container *, '+y+" .ast-archive-description *")}}(jQuery);