import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesUpdatePageComponent } from './games-update-page.component';

describe('GamesUpdatePageComponent', () => {
  let component: GamesUpdatePageComponent;
  let fixture: ComponentFixture<GamesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesUpdatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
