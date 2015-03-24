<form>
	<table>
	<tr>
		<td><label>Titel</label></td>
		<td><input id="title" type="text" value="<%= title %>"></td>
	<tr>
		<td><label>Beschreibung</label></td>
		<td><textarea id="description"><%= description %></textarea></td>
	</tr>
	<tr>
		<td><label>Besitzer</label></td>
		<td>
			<select id="user">
				<% users.each( function( u ){ %> 
					<option value="<%= u.get('id') %>" <% if(u == user){%> selected <%}%> ><%= u.get('first_name') %> <%= u.get('last_name') %></option>
				<% }) %>
			</select>
		</td>
	</tr>
	<tr>
		<td><label>Schwierigkeit</label></td>
		<td>
			<select id="difficulty">
				<option value="1" <% if(difficulty == 1){%> selected <%}%>>1</option>
				<option value="2" <% if(difficulty == 2){%> selected <%}%>>2</option>
				<option value="3" <% if(difficulty == 3){%> selected <%}%>>3</option>
				<option value="5" <% if(difficulty == 5){%> selected <%}%>>5</option>
				<option value="8" <% if(difficulty == 8){%> selected <%}%>>8</option>
			</select>
		</td>
	</tr>
	<tr>
		<td><button id="delete" class="btn btn-danger">Löschen</button></td>
		<td><button id="next" class="btn btn-success" <% if(state == 'done'){%> disabled <%}%> >Next</button></td>		
	</tr>
</form>