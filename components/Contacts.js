var Contacts = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function() {
		var contacts = this.props.items.map(function(contact) {
			return 
			/*React.createElement(Contact, {item: contact, key: contact.id});*/
			<Contact key={contact.id} item={contact} />;
			console.log('hej!!!');
		});

		return (
			React.createElement('ul', {className: 'contactsList'}, contacts)
			/*<ul className={'contactsList'}>
			
			<div>Hej</div>
			</ul>*/
		);
	}
});
