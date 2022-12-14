var GistAddForm = React.createClass({
    getInitialState: function() {
        return {
            username: ''
        }
    },
    changeUsername: function(e) {
        this.setState({username: e.target.value})
    },
    addGist: function(e){
        e.preventDefault();
        this.props.onAdd(this.state.username);
        this.setState({username: ''})
    },
    render: function(){
        return (
            <div>
                <form className="form-inline" onSubmit={this.addGist}>
                    <input value={this.state.username} onChange={this.changeUsername} placeholder="Type a github username..." />
                    <button>Fetch Latest Gist</button>
                </form>
            </div>
        )
    }
});