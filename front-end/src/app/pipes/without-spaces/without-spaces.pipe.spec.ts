import { WithoutSpacesPipe } from './without-spaces.pipe';

describe('WithoutSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new WithoutSpacesPipe();
    expect(pipe).toBeTruthy();
  });
});
