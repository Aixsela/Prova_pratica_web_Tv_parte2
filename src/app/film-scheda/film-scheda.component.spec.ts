import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSchedaComponent } from './film-scheda.component';

describe('FilmSchedaComponent', () => {
  let component: FilmSchedaComponent;
  let fixture: ComponentFixture<FilmSchedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSchedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSchedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
