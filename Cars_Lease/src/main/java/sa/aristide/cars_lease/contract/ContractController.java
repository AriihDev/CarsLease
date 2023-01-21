package sa.aristide.cars_lease.contract;

import java.util.List;
import java.util.Optional;

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
@RequestMapping("/api/v1/contracts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContractController {
	@Autowired
	ContractService contractService;

	@GetMapping("/")
	public List<Contract> listContract() {
		return contractService.getAllContract();
	}

	/* AVEC OPTIONAL / WITH OPTIONAL
	 * @GetMapping("/contracts/{id}") public ResponseEntity<Contract>
	 * getContractById(@PathVariable("id") long id){ Optional<Contract> oContract =
	 * Optional.of(contractService.getContractByID(id));
	 * 
	 * if (oContract.isPresent()) return new
	 * ResponseEntity<Contract>(oContract.get(),HttpStatus.OK); else return new
	 * ResponseEntity<>(HttpStatus.NOT_FOUND); }
	 */

	@GetMapping("/{id}")
	public ResponseEntity<Contract> getContractById(@PathVariable("id") long id) {
		Contract contract = contractService.getContractByID(id);

		if (contract != null)
			return new ResponseEntity<>(contract, HttpStatus.OK);
		else
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}
	

	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteById(@PathVariable("id") long id) {
		if (contractService.deleteById(id) == true)
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/")
    public ResponseEntity<Contract> createTutorial(@RequestBody Contract contract) {
        try {
            Contract createdContract = contractService.addContract(contract);
            return new ResponseEntity<>(createdContract, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	@PutMapping("/{id}")
    public ResponseEntity<Contract> updateContract(@PathVariable("id") long id, @RequestBody Contract contract) {
      Contract existingContract= contractService.getById(id);

     if (existingContract != null) {
    	 Contract updatedContract = new Contract();
    	updatedContract.setId(existingContract.getId());
    	updatedContract.setAdvance(existingContract.getAdvance());
    	updatedContract.setEndLease(existingContract.getEndLease());
    	updatedContract.setLeftToPay(existingContract.getLeftToPay());
    	updatedContract.setPlaceOfReturn(existingContract.getPlaceOfReturn());
    	updatedContract.setStartLease(existingContract.getStartLease());
    	updatedContract.setTotalPrice(existingContract.getTotalPrice());
    	updatedContract.setDate(existingContract.getDate());
        return new ResponseEntity<>(contractService.save(updatedContract), HttpStatus.OK);
      } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
    }

}
