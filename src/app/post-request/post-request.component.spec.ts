import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestComponent } from './post-request.component';

describe('PostRequestComponent', () => {
  let component: PostRequestComponent;
  let fixture: ComponentFixture<PostRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
