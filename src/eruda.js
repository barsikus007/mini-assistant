/* eslint-disable import/no-self-import */
/* eslint-disable import/no-extraneous-dependencies */
import * as eruda from 'eruda';
import * as erudaCode from 'eruda-code';
import * as erudaDom from 'eruda-dom';

eruda.init();
eruda.add(erudaCode);
eruda.add(erudaDom);

export default eruda;
