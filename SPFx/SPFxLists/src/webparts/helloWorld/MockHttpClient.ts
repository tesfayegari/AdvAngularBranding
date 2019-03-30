import { ISPList } from './HelloWorldWebPart';

export default class MockHttpClient  {

    private static _items: ISPList[] = [{ Title: 'Mock List', Id: '1', ItemCount:20 },
                                        { Title: 'Mock List 2', Id: '2', ItemCount:40  },
                                        { Title: 'Mock List 3', Id: '3', ItemCount:39  }];
    
    public static get(): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}