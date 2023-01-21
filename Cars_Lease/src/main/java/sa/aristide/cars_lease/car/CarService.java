package sa.aristide.cars_lease.car;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {
	@Autowired
	CarRepository carRepository;
	// carRepository = new Hibernate()

	public Car add(Car car) {
		return carRepository.save(car);
	}

	public List<Car> getAllCar() {
		return carRepository.findAll();
	}

	public Car getById(long id) {
		return carRepository.findById(id).orElse(null);
	}

	public List<Car> getByColor(String color) {
		return carRepository.findByColor(color);
	}

	public List<Car> getByBrand(String brand) {
		return carRepository.findByBrandContaining(brand);
	}

	public boolean deleteById(long id) {
		try {
			carRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}

	}

	public Car save(Car updatedCar) {
		return carRepository.save(updatedCar);
	}
}
