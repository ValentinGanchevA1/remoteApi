/* infoportal-breadcrumb.js */

function updateBreadcrumbWidth() {
    var bradcrumbs = $('breadcrumbs-container');
    if (bradcrumbs) {

        var hashText = "(...)";
        var cutMulti = 1;
        var maxBredcrumbAnchorLength = 15;
        var breadcrumbsWidth = bradcrumbs.getWidth();
        var leftCol = $('left-region');
        var leftColWidth = 0;
        if (leftCol) {
            leftColWidth = $('left-region').getWidth();
        }
        var centerCol = $('center-region');
        var centerColWidth = 0;
        if (centerCol) {
            centerColWidth = $('center-region').getWidth();
        }
        var rightCol = $('right-region');
        var rightColWidth = 0;
        if (rightCol) {
            rightColWidth = $('right-region').getWidth();
        }


        /*je�li inny layout bez kolumn*/
        if (!leftCol || !centerCol || !rightCol) {
            return;
        }

        if ((leftColWidth + centerColWidth + rightColWidth) < 950) {
            centerColWidth = centerColWidth + rightColWidth;
        }

        if (centerColWidth == 0 && leftColWidth < rightColWidth) {
            centerColWidth = rightColWidth;
        }

        if (parseInt(leftColWidth) + parseInt(centerColWidth) < parseInt(breadcrumbsWidth)) {
            $$('#breadcrumbs-container .bread-crumbs-element').each(function(el) {
                var link = el.down('a');
                var hashLength = hashText.length;
                if (link) {
                    /*
                    		            var linkLength = link.innerHTML.length;
                    		            if(linkLength > maxBredcrumbAnchorLength && (linkLength-maxBredcrumbAnchorLength) > hashLength){
                    		                link.innerHTML = link.innerHTML.substr(0,maxBredcrumbAnchorLength - hashLength - 1) + hashText;
                    		            }*/
                } else {
                    var elLength = el.innerHTML.length;
                    el.innerHTML = el.innerHTML.replace(/^\s*|\s*$/g, '').substr(0, elLength - cutMulti - hashLength) + hashText;
                }
            });

            updateBreadcrumbWidth();

        }
    }
}