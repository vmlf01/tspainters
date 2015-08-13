/**
 * Created by vmlf on 13-08-2015.
 */

import Painter = require('../models/Painter');

class PainterDetailsController {

    showDetails(painter:Painter) {
        alert('Painter details: ' + painter.name);
    }
}

export = PainterDetailsController;