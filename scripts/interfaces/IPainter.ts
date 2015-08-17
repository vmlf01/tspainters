/**
 * Created by vmlf on 15-08-2015.
 */

import IPerson = require('./IPerson');
import IWorkOfArt = require('./IWorkOfArt');

interface IPainter extends IPerson {
    style: string;
    examples: IWorkOfArt[];
    image: string;
	wiki: string;
}

export = IPainter;