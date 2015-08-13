/**
 * Created by vmlf on 13-08-2015.
 */

declare var $;

import Painter = require('../models/Painter');
import Config = require('../config/config');

class PaintersDataService {
    getPainters(cb) {

        $.ajax({
            url: Config.PAINTERS_ENDPOINT,
            success: function (data) {
                cb(null, data.famousPainters);
            },
            error: function(req, errType, ex) {
                cb(new Error('An error occured getting the json file: ' + (ex || errType)));
            }
        });
    }
}

export = PaintersDataService;