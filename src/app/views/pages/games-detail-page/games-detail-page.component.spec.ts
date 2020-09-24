import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesDetailPageComponent } from './games-detail-page.component';

describe('GamesDetailPageComponent', () => {
  let component: GamesDetailPageComponent;
  let fixture: ComponentFixture<GamesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
