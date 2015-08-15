/**
 * Created by vmlf on 15-08-2015.
 */

import IPainter = require('../interfaces/IPainter');

interface IPainterDetailsController {
    showDetails(painter:IPainter): void;
}

export = IPainterDetailsController;