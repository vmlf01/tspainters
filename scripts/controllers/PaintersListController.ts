/**
 * Created by vmlf on 13-08-2015.
 */

import IPainterDetailsController = require('../interfaces/IPainterDetailsController');
import IPaintersListController = require('../interfaces/IPaintersListController');
import IPainter = require('../interfaces/IPainter');
import PaintersService = require('../services/PaintersDataService');
import ErrorController = require('./ErrorController');

declare var $;

class PaintersListController implements IPaintersListController {

    private painterDetails: IPainterDetailsController;

    constructor(detailsController: IPainterDetailsController) {
        this.painterDetails = detailsController;
    }

    showPainters(): void {

        ErrorController.resetErrorDisplay();
        PaintersService.getPainters((err, painters) => {
            if (err) {
                ErrorController.displayError(err);
            }
            else {
                this.renderPainters($("#paintersList"), painters);
            }
        });

    }

    private renderPainters(container:HTMLElement, paintersList: IPainter[]): void {
        // clear previous container contents
        $(container).empty();

        // append each new painter
        if (paintersList) {
            paintersList.forEach((p) => {
                var html = `
                    <div class="painter col-sm-6 col-md-3 col-lg-2">
                        <img class="img-responsive" src="` + p.image + `" />
                        <h3>` + p.name + `</h3>
                    </div>
                `;
                var painterDiv = $(html);
                painterDiv.click(() => this.painterDetails.showDetails(p));

                $(container).append(painterDiv);
            });
        }
    }
}

export = PaintersListController;