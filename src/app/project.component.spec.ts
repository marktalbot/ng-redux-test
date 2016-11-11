import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ProjectAppComponent } from '../app/project.component';

beforeEachProviders(() => [ProjectAppComponent]);

describe('App: Project', () => {
  it('should create the app',
      inject([ProjectAppComponent], (app: ProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'project works!\'',
      inject([ProjectAppComponent], (app: ProjectAppComponent) => {
    expect(app.title).toEqual('project works!');
  }));
});
