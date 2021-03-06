svgEditor.addExtension('filter', function(S) {
    var currentElement;
    var NS = "http://www.w3.org/2000/svg";
    function changeFilter(filterValue){
        var filterData;
        if(filterValue == 'None'){
            $(currentElement).attr('data-filterId',"None");
            $(document).find('.filter').remove();
            $(currentElement).removeAttr('filter');
        }else
        if(filterValue == 'Desaturate'){
            filterData='<filter class="filter" id="Desaturate" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+
			'<feColorMatrix values="0" type="saturate"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Desaturate)");
            $(currentElement).attr('data-filterId',"Desaturate");
        }else
        if(filterValue == 'Duotone'){
            filterData='<filter class="filter" id="Duotone" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+'<feColorMatrix values="0" type="saturate" result="result1"/>'+
			'<feFlood result="result2" flood-color="rgb(9,111,152)"/>'+
			'<feBlend result="result2" in2="result1" mode="screen"/>'+
			'<feComposite operator="in" in2="SourceGraphic" in="result2"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Duotone)");
            $(currentElement).attr('data-filterId',"Duotone");
        }else
        if(filterValue == 'Fluorescence'){
            filterData='<filter class="filter" id="Fluorescence" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+
			'<feColorMatrix values="0" type="hueRotate"/><feColorMatrix values="1" type="saturate"/>'+
			'<feColorMatrix values="2 -1 0 0 0 0 2 -1 0 0 -1 0 2 0 0 0 0 0 1 0 " type="matrix"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Fluorescence)");
            $(currentElement).attr('data-filterId',"Fluorescence");
        }else
        if(filterValue == 'Invert'){
            filterData='<filter class="filter" id="Invert" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+
			'<feColorMatrix values="1" type="saturate" result="fbSourceGraphic"/>'+
			'<feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 " in="fbSourceGraphic"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Invert)");
            $(currentElement).attr('data-filterId',"Invert");
        }else
        if(filterValue == 'Invert_hue'){
            filterData='<filter class="filter" id="Invert_hue" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+
			'<feColorMatrix values="180" type="hueRotate" result="result1"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Invert_hue)");
            $(currentElement).attr('data-filterId',"Invert_hue");
        }else
        if(filterValue == 'Moonarize'){
            filterData='<filter class="filter" id="Moonarize" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+
			'<feColorMatrix values="180" type="hueRotate" result="fbSourceGraphic"/>'+
			'<feColorMatrix result="result3" values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 " in="fbSourceGraphic"/>'+
			'<feBlend result="result2" in="fbSourceGraphic" in2="result3" mode="lighten"/>'+
			'<feBlend result="result1" in="result2" in2="result2" mode="multiply"/>'+
			'<feComposite operator="in" in2="SourceGraphic"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Moonarize)");
            $(currentElement).attr('data-filterId',"Moonarize");
        }else
        if(filterValue == 'Quadritone_Fantasy'){
            filterData='<filter class="filter" id="Quadritone_Fantasy" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+
			'<feColorMatrix values="1" type="saturate" result="result2"/>'+
			'<feColorMatrix type="hueRotate" in="result2" values="50" result="result1"/>'+
			'<feColorMatrix type="matrix" values="1 -1 1 0 0 0 1 0 0 0 1 -1 1 0 0 0 0 0 1 0 "/>'+
			'<feColorMatrix type="hueRotate" values="300"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Quadritone_Fantasy)");
            $(currentElement).attr('data-filterId',"Quadritone_Fantasy");
        }else
        if(filterValue == 'Sepia'){
            filterData='<filter class="filter" id="Sepia" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+
			'<feColorMatrix result="result2" type="saturate" values="0" in="SourceGraphic"/>'+
			'<feFlood result="result1" flood-opacity="1" flood-color="rgb(160,67,0)"/>'+
			'<feBlend result="result5" in="result2" in2="result1" mode="multiply"/>'+
			'<feBlend result="result3" in2="result2" mode="screen"/>'+
			'<feComposite operator="arithmetic" k2="1" in2="result2" result="result4"/>'+
			'<feComposite operator="in" in2="SourceAlpha" in="result4"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Sepia)");
            $(currentElement).attr('data-filterId',"Sepia");
        }else
        if(filterValue == 'Soft_Colors'){
            filterData='<filter class="filter" id="Soft_Colors" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+
			'<feColorMatrix values="1" type="saturate" result="result91"/>'+
			'<feComposite in2="result91" k3="0.3" k2="0.4" k1="0.3" result="result15" operator="arithmetic"/>'+
			'<feGaussianBlur result="result8" stdDeviation="5" in="result15"/>'+
			'<feComposite operator="in" in2="result8" result="result13"/>'+
			'<feComposite in2="result13" k3="0.3" k2="0.4" k1="0.3" result="result6" in="result15" operator="arithmetic"/>'+
			'<feFlood result="result10" in="result6" flood-opacity="1" flood-color="rgb(128,172,0)"/>'+
			'<feBlend mode="darken" in="result6" in2="result10" result="result12"/>'+
			'<feBlend mode="screen" in2="result6" result="result14"/><feComposite operator="in" result="result2" in2="SourceGraphic" in="result14"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Soft_Colors)");
            $(currentElement).attr('data-filterId',"Soft_Colors");
        }else
        if(filterValue == 'Tritone'){
            filterData='<filter class="filter" id="Tritone" height="1" width="1" color-interpolation-filters="sRGB" y="0" x="0">'+
			'<feColorMatrix result="r" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1 " type="matrix" in="SourceGraphic"/>'+
			'<feColorMatrix  result="g" values="0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 " type="matrix" in="SourceGraphic"/>'+
			'<feColorMatrix result="b" values="0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 1 " type="matrix" in="SourceGraphic"/>'+
			'<feBlend result="minrg" in="r" in2="g" mode="darken"/>'+
			'<feBlend result="p" in="minrg" in2="b" mode="darken"/>'+
			'<feBlend result="maxrg" in="r" in2="g" mode="lighten"/>'+
			'<feBlend result="q" in="maxrg" in2="b" mode="lighten"/>'+
			'<feComponentTransfer result="q2" in="q">'+
			'<feFuncR slope="0" type="linear"/></feComponentTransfer>'+
			'<feBlend result="pq" in="p" in2="q2" mode="lighten"/>'+
			'<feColorMatrix result="qminp" values="-1 1 0 0 0 -1 1 0 0 0 -1 1 0 0 0 0 0 0 0 1 " type="matrix" in="pq"/>'+
			'<feComponentTransfer result="coefsq" in="qminp">'+
			'<feFuncR id="feFuncR3123" type="table" tableValues="1 1 0 0 0 1 1"/>'+
			'<feFuncG id="feFuncG3125" type="table" tableValues="0 1 1 1 0 0 0"/>'+
			'<feFuncB type="table" tableValues="0 0 0 1 1 1 0"/>'+
			'</feComponentTransfer><feFlood result="result1" flood-color="rgb(203,0,254)"/>'+
			'<feComposite in2="result1" k1="1" result="qminpc" in="qminp" operator="arithmetic"/>'+
			'<feComposite in2="qminpc" k3="1" k2="1" result="color" in="p" operator="arithmetic"/>'+
			'<feComposite operator="in" k1="1" in2="SourceGraphic" in="color"/>'+
			'</filter>';
            $(currentElement).attr('filter',"url(#Tritone)");
            $(currentElement).attr('data-filterId',"Tritone");
        }
		//this can remove the unwanted defs
        if($(document).find('defs').html()==null){
         $(this).remove();
        }
        var createDef = document.createElementNS(NS.SVG, 'defs');
        //createDef.setAttribute('class','imageFilter');
        var current_layer = svgCanvas.getCurrentDrawing().getCurrentLayer();
        var newDoc = svgedit.utilities.text2xml(filterData);
        var svg = document.importNode(newDoc.documentElement, true);
        //current_layer.appendChild(svg);
        current_layer.appendChild(createDef).appendChild(svg);
        svgCanvas.setSvgString(svgCanvas.getSvgString());

    }
   
    var showPanel = function(on) {
        $('#filter_panel').toggle(on);
    };

    return {
        name: "Simple Filter tools",
        context_tools: [{
            type: 'select',
            panel: "filter_panel",
            title: "Filters",
            id: "filterType",
            label: "Filters",
            size: 3,
            defval: "None",
            options: {
                "None": "None",
                "Desaturate": "Desaturate",
                "Duotone": "Duotone",
                "Fluorescence": "Fluorescence",
				"Invert": "Invert",
				"Invert_hue": "Invert hue",
				"Moonarize": "Moonarize",
				"Quadritone_Fantasy": "Quadritone Fantasy",
				"Sepia": "Sepia",
				"Soft_Colors": "Soft Colors",
				"Tritone": "Tritone"
            },
            events: {
                change: function(){
                    try{
                        var filterValue=$(this).val();
                        changeFilter(filterValue);
                    }
                    catch (e){}
                }
            }
        }],

        mouseDown: function(opts) {
         
        },

        mouseUp: function(opts) {
         
        },

        selectedChanged: function(opts){
            try{
                currentElement = opts.elems;
                if(($(currentElement).prop("tagName")) === "image"){
                    showPanel(true);
                }else{
                    showPanel(false);
                }
                var selectedValue = $(currentElement).attr('data-filterId');               
                $("#filterType").val(selectedValue);
            }catch(e){
                console.log(e.message);
                showPanel(false);
            }
        }
    }

});