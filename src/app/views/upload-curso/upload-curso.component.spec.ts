import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCursoComponent } from './upload-curso.component';

describe('UploadCursoComponent', () => {
  let component: UploadCursoComponent;
  let fixture: ComponentFixture<UploadCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
