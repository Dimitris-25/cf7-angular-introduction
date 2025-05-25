import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindexampleComponent } from './event-bindexample.component';

describe('EventBindexampleComponent', () => {
  let component: EventBindexampleComponent;
  let fixture: ComponentFixture<EventBindexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
