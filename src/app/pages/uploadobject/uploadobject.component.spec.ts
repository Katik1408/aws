import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadobjectComponent } from './uploadobject.component';

describe('UploadobjectComponent', () => {
  let component: UploadobjectComponent;
  let fixture: ComponentFixture<UploadobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
