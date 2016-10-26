import routes from './index';
import Keys from '../../keys';
import {Subject} from 'rx';

describe('routes', ()=>{
  let mockIntents;
  
  beforeEach(()=>{
    mockIntents = { subject: new Subject() };
    routes.__Rewire__('Intents', mockIntents);
  });
  
  it('should return initialised by default', () => {
    routes
      .get()
      .map( fn => fn({}).route)
      .subscribe( result => {
        expect(result).to.equal('initialised');
    })
  });
  
  it('should change route', () => {
    const results = [];
    
    routes
      .get()
      .map( fn => fn({}).route)
      .subscribe(results.push.bind(results));
    
    mockIntents.subject.onNext({key: Keys.CHANGE_ROUTE, data: 'one'});
    mockIntents.subject.onNext({key: Keys.CHANGE_ROUTE, data: 'two'});
    
    expect(results[0]).to.equal('initialised');
    expect(results[1]).to.equal('one');
    expect(results[2]).to.equal('two');
  });
  
  it('should not refire change if the same route is requested', () => {
    const results = [];

    routes
      .get()
      .map( fn => fn({}).route)
      .subscribe(results.push.bind(results));
    
    mockIntents.subject.onNext({key: Keys.CHANGE_ROUTE, data: 'one'});
    mockIntents.subject.onNext({key: Keys.CHANGE_ROUTE, data: 'one'});
    mockIntents.subject.onNext({key: Keys.CHANGE_ROUTE, data: 'two'});

    expect(results[0]).to.equal('initialised');
    expect(results[1]).to.equal('one');
    expect(results[2]).to.equal('two');
  });
});