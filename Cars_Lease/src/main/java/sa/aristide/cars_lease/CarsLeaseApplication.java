package sa.aristide.cars_lease;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import sa.aristide.cars_lease.car.Car;
import sa.aristide.cars_lease.car.CarService;
import sa.aristide.cars_lease.client.Client;
import sa.aristide.cars_lease.client.ClientService;
import sa.aristide.cars_lease.contract.Contract;
import sa.aristide.cars_lease.contract.ContractService;
import sa.aristide.cars_lease.invoice.Invoice;
import sa.aristide.cars_lease.invoice.InvoiceService;

@SpringBootApplication
public class CarsLeaseApplication implements CommandLineRunner {

	@Autowired
	CarService carService;

	@Autowired
	ContractService contractService;

	@Autowired
	ClientService clientService;

	@Autowired
	InvoiceService invoiceService;

	public static void main(String[] args) {
		SpringApplication.run(CarsLeaseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		// ------ CAR ------- //

		Car car = new Car();

		car.setBrand("BMW");
		car.setColor("Dark");
		car.setFirstUse(Date.valueOf("2000-02-02"));

		carService.add(car);

		car = new Car();
		car.setBrand("Lamborghini");

		carService.add(car);

		// ------ CONTRACT ------- //

		Contract contract = new Contract();

		contract.setDate(Date.valueOf("2022-03-03"));
		contract.setStartLease(Date.valueOf("2022-03-03"));
		contract.setEndLease(Date.valueOf("2022-03-03"));
		contract.setTotalPrice(5000);
		contract.setAdvance(1500);
		contract.setLeftToPay(3500);
		contract.setPlaceOfReturn("Paris");

		contractService.addContract(contract);

		contract = new Contract();
		contract.setPlaceOfReturn("Monaco");
		contractService.addContract(contract);

		// ------ CLIENT ------- //

		Client client = new Client();

		client.setFname("Doe");
		client.setLname("John");
		client.setAddress("Lille");

		clientService.add(client);

		client = new Client();
		client.setAddress("Lyon");

		clientService.add(client);

		// ------ INVOICE ------- //

		Invoice invoice = new Invoice();

		invoice.setAddress("Brest");
		invoice.setAmount(50000);
		invoice.setDate(Date.valueOf("2004-10-20"));

		invoiceService.add(invoice);

		invoice = new Invoice();
		invoice.setAddress("Lyon");

		invoiceService.add(invoice);

	}

}
