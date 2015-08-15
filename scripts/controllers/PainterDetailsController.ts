/**
 * Created by vmlf on 13-08-2015.
 */

declare var $;

import IPainter = require('../interfaces/IPainter');

class PainterDetailsController {

    showDetails(painter: IPainter) {
        $("#painterDetails").html(painter.name);
    }
}

export = PainterDetailsController;