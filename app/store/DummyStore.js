Ext.define('GS.store.DummyStore', {
    extend: 'Ext.data.Store',
    config: {
    	fields: ['name', 'img', 'text'],
    	data: [
        	{
            	name: 'edpsencer',
            	img: 'http://a2.twimg.com/profile_images/1175591906/Ed-presenting-cropped_reasonably_small.jpg',
            	text: 'Read about Sencha Touch'
        	},{
            	name: 'rdougan',
            	img: 'http://a0.twimg.com/profile_images/1261180556/171265_10150129602722922_727937921_7778997_8387690_o_reasonably_small.jpg',
            	text: 'Javascript development'
        	},{
            	name: 'philogb',
            	img: 'https://si0.twimg.com/profile_images/1249073521/ng_normal.png',
            	text: '@ikarienator nice burritos!'
        	}
    	]
    }
});
