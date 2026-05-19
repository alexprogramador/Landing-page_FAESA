import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoComponent } from './course-info.component';

describe('CourseInfoComponent', () => {
  let component: CourseInfoComponent;
  let fixture: ComponentFixture<CourseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseInfoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
