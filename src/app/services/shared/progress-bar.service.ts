import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import {NgProgressRef} from '@ngx-progressbar/core'

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isLoadingDeterminate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
}
