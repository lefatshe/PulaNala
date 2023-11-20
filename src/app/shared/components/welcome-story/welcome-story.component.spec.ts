import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeStoryComponent } from './welcome-story.component';

describe('WelcomeStoryComponent', () => {
  let component: WelcomeStoryComponent;
  let fixture: ComponentFixture<WelcomeStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
