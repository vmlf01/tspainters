/**
 * Created by vmlf on 13-08-2015.
 */

declare var $;

import IPainter = require('../interfaces/IPainter');
import Config = require('../config/config');

class PaintersDataService {
    static getPainters(cb: (err: Error, data: IPainter[]) => void): void {

        $.ajax({
            url: Config.PAINTERS_ENDPOINT,
            success: function (data) {
                cb(null, data.famousPainters);
            },
            error: function(req, errType, ex) {
                cb(new Error('An error occured getting the json file: ' + (ex || errType)), null);
            }
        });
    }
}

export = PaintersDataService;