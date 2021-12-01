import { Injectable } from '@angular/core';
import { SnotifyService } from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snotify_service: SnotifyService) { }

  public success(message: string, _timeout = 2000, _showProgressBar = true, _closeOnClick = true, _pauseOnHover = true)
  {
    this.snotify_service.success(message, {
      timeout: _timeout,
      showProgressBar: _showProgressBar,
      closeOnClick: _closeOnClick,
      pauseOnHover: _pauseOnHover
    });
  }

  public error(message: string, _timeout = 3000, _showProgressBar = true, _closeOnClick = true, _pauseOnHover = true)
  {
    this.snotify_service.error(message, {
      timeout: _timeout,
      showProgressBar: _showProgressBar,
      closeOnClick: _closeOnClick,
      pauseOnHover: _pauseOnHover
    });
  }

  public info(message: string, _timeout = 3000, _showProgressBar = true, _closeOnClick = true, _pauseOnHover = true)
  {
    this.snotify_service.info(message, {
      timeout: _timeout,
      showProgressBar: _showProgressBar,
      closeOnClick: _closeOnClick,
      pauseOnHover: _pauseOnHover
    });
  }

}
