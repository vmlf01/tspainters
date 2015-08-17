/**
 * Created by vmlf on 13-08-2015.
 */

declare var $;

import IPainter = require('../interfaces/IPainter');

class PainterDetailsController {

    showDetails(painter: IPainter) {
        var html = `
            <div class="painter-details">
                <div class="col-md-3 col-sm-12">
                    <img class="img-responsive img-left img-circle" src="` + painter.image + `"></img>
					<a href="` + painter.wiki + `" target="_blank">see on Wikipedia <i class="fa fa-external-link"></i></a>
                </div>
                <div class="col-md-8 col-sm-12">
                    <!-- painter details -->
                    <div class="text-left">
                        <a id="back" href="#painters" class="btn btn-default btn-lg pull-right"><i class="fa fa-chevron-left"></i> <span class="network-name">Back</span></a>
                        <h2 class="">` + painter.name + `</h2>
                        <hr />
                        <h3>`;

        if (painter.dateOfBirth) {
            html += `       <small>Date of Birth:</small> ` + painter.dateOfBirth + `<br />`;
        }

        if (painter.placeOfBirth) {
            html += `       <small>Place of Birth:</small> ` + painter.placeOfBirth + `<br />`;
        }

        if (painter.nationality) {
            html += `       <small>Nationality:</small> ` + painter.nationality + `<br />`;
        }

        if (painter.style) {
            html += `       <small>Style:</small> ` + painter.style + `<br />`;
        }

        html += `       </h3>
                    </div>

                <!-- painter works of art carousel -->
                <div class="col-md-9">
                    <div id="painter-carousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner" role="listbox">
        `;

        painter.examples.forEach(function(workOfArt, index) {
            html += `
                            <div class="item` + (index === 0 ? ' active' : '' ) + `">
                              <img src="` + workOfArt.image + `" class="img-responsive" />
                              <div class=""><h3>` + workOfArt.name;

            if (workOfArt.year) {
                html += ` <small>(` + workOfArt.year + `)</small>`;
            }

        html += `               </h3></div>
                            </div>
            `;
        });

        html += `
                        </div>

                        <!-- Controls -->
                        <a class="left carousel-control" href="#painter-carousel" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#painter-carousel" role="button" data-slide="next">
                            <span class="glyphicon  glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                </div>
        `;

        html += `
            </div>
        `;

        $("#painterDetails").html(html);

        $("#painterDetails #back").click(() => {
            $("#painterDetails").hide();
            $("#paintersList").show();
			
			this.scrollPaintersIntoView();
        });

        $("#paintersList").hide();
        $("#painterDetails").show();

		this.scrollPaintersIntoView();
    }
	
	private scrollPaintersIntoView() {
        $('html, body').stop().animate({
            scrollTop: $("#painters").offset().top
        }, 500, 'easeInOutExpo');
	}
}

export = PainterDetailsController;