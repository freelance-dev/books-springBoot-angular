import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewYokTimesComponent } from './book-new-yok-times.component';

describe('BookNewYokTimesComponent', () => {
  let component: BookNewYokTimesComponent;
  let fixture: ComponentFixture<BookNewYokTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNewYokTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNewYokTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
