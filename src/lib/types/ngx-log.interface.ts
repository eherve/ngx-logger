import {NgxLoggerLevel} from './logger-level.enum';

export class NGXLogInterface {
  level: NgxLoggerLevel;
  timestamp: string;
  fileName: string;
  lineNumber: string;
  message: any;
  additional: any[];
}
