import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLoginComponent } from './music-login.component';

describe('MusicPlayerComponent', () => {
  let component: MusicLoginComponent;
  let fixture: ComponentFixture<MusicLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
