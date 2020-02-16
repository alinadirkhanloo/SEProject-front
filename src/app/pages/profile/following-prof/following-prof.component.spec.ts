import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingProfComponent } from './following-prof.component';

describe('FollowingProfComponent', () => {
  let component: FollowingProfComponent;
  let fixture: ComponentFixture<FollowingProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
