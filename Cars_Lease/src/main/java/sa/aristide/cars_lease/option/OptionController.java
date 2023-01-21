package sa.aristide.cars_lease.option;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/options")
public class OptionController {
	
	
	@Autowired
	OptionService optionService;
	
	@GetMapping("/")
	public List<Option> getAllOption() {
		return optionService.getAllOption();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Option> getInvoiceById(@PathVariable("id") long id) {
		Option option = optionService.getById(id);

		if (option != null)
			return new ResponseEntity<>(option, HttpStatus.OK);
		else
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}


	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteById(@PathVariable("id") long id) {
		if (optionService.deleteById(id) == true)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/")
    public ResponseEntity<Option> createTutorial(@RequestBody Option option) {
        try {
        	Option createdOption = optionService.add(option);
            return new ResponseEntity<>(createdOption, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	@PutMapping("/{id}")
    public ResponseEntity<Option> updateOption(@PathVariable("id") long id, @RequestBody Option option) {
		Option existingOption= optionService.getById(id);

     if (existingOption != null) {
    	 Option updatedOption = new Option();
        updatedOption.setId(existingOption.getId());
        updatedOption.setName(existingOption.getName());
        return new ResponseEntity<>(optionService.save(updatedOption), HttpStatus.OK);
      } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
    }

}
