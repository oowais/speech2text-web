import {SpeechEvent} from './speech-event';
import {SpeechError} from './speech-error';

export interface SpeechNotification<T> {
  event?: SpeechEvent;
  error?: SpeechError;
  content?: T;
}
