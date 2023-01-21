package sa.aristide.cars_lease.client;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/clients")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

	@Autowired
	ClientService clientService;
	
	@GetMapping("/")
	public List<Client> getAllClient() {
		return clientService.getAllClient();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Client> getClientById(@PathVariable("id") long id) {
		Client client = clientService.getById(id);

		if (client != null)
			return new ResponseEntity<>(client, HttpStatus.OK);
		else
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}

	@GetMapping("/fname/{fname}")
	public ResponseEntity<List<Client>> getClientByFname(@PathVariable("fname") String fname) {

		return new ResponseEntity<>(clientService.getByFname(fname), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteById(@PathVariable("id") long id) {
		if (clientService.deleteById(id) == true)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/")
    public ResponseEntity<Client> createTutorial(@RequestBody Client client) {
        try {
            Client createdClient = clientService.add(client);
            return new ResponseEntity<>(createdClient, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	@PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable("id") long id, @RequestBody Client client) {
      Client existingClient= clientService.getById(id);

     if (existingClient != null) {
        Client updatedClient = new Client();
        updatedClient.setId(existingClient.getId());
        updatedClient.setAddress(client.getAddress());
        return new ResponseEntity<>(clientService.save(updatedClient), HttpStatus.OK);
      } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
    }
}
