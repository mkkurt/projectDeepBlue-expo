const problems = [
  {
    name: "P1 No power (electricity).",
    reasons: [
      {
        name: "Faulty power (electricity) source.",
        solutions: ["Check if electricity is coming from the main panel."],
      },
      {
        name: "Emergency button is on.",
        solutions: ["Check the button."],
      },
      {
        name: "Damaged fuse.",
        solutions: ["Check the fuses."],
      },
      {
        name: "Faulty transformer (converter).",
        solutions: ["Check the transformer."],
      },
      {
        name: "Electrical fault in the relay.",
        solutions: ["Check the relay."],
      },
    ],
  },
  {
    name: "P2 Flue gas fan not working.",
    reasons: [
      {
        name: "Motor circuit breaker tripped.",
        solutions: ["Reset the breaker."],
      },
      {
        name: "Faulty contactor.",
        solutions: ["Check the contactor."],
      },
      {
        name: "Faulty motor.",
        solutions: ["Check the motor, replace if necessary."],
      },
      {
        name: "Faulty button (start switch).",
        solutions: ["Check the button."],
      },
    ],
  },
  {
    name: "P3 Burner control panel (No: 1 diesel-oil nozzle) not working.",
    reasons: [
      {
        name: "One of the alarm indicators is active (in circuit).",
        solutions: ["Check the alarm circuit and reset the alarm."],
      },
      {
        name: "Loading door safety is not active.",
        solutions: ["Close the door tightly."],
      },
      {
        name: "Blown fuse in the control panel.",
        solutions: ["Check the fuse."],
      },
      {
        name: "Fault in the burner control panel.",
        solutions: ["Check the control panel."],
      },
      {
        name: 'Faulty "Diesel-oil Burner" button.',
        solutions: ["Check the burner and button."],
      },
    ],
  },
  {
    name: "P4 Burner motor not working (but burner control panel is working).",
    reasons: [
      {
        name: 'Burner motor breaker tripped ("Motor Overload" alarm is on).',
        solutions: [
          "Reset the breaker.",
          "Check the set value for the breaker.",
          "Check the motor.",
        ],
      },
    ],
  },
  {
    name: 'P5 "Diesel-oil Pressure Low" alarm after the burner motor starts.',
    reasons: [
      {
        name: "Diesel-oil cannot be supplied.",
        solutions: ["Check the tank, circuit valves, and filters."],
      },
      {
        name: "Diesel-oil (D/O) pressure switch is not active.",
        solutions: [
          "Check the pressure switch.",
          "Check the diesel-oil solenoid valves.",
          "Check the diesel-oil pressure.",
          "Check the pump.",
        ],
      },
    ],
  },
  {
    name: 'P6 "Flame Failure" alarm after the burner motor starts.',
    reasons: [
      {
        name: "No ignition spark.",
        solutions: [
          "Check the ignition electrodes, their position, and the spark gap.",
          "Check the ignition cable.",
          "Check the power (electricity) to the ignition transformer.",
          "Diesel-oil solenoid valves are not open.",
          "Check the electricity to the solenoid coils, the solenoid valve, and the coil.",
          "Dirty fuel nozzle.",
          "Clean the filter on the nozzle or replace the nozzle.",
          "Too much initial air for combustion.",
          "The air damper on the burner is not in the minimum position, set the damper to the minimum position.",
          "The control relay to restart the burner is not active.",
          "Review the control relay.",
          "Faulty or dirty photocell.",
          "Check the photocell, clean it if dirty.",
          "Poor diesel-oil (fuel) quality.",
          "Check the fuel, pass it through the separator again if necessary.",
          "Increase fuel pressure.",
        ],
      },
    ],
  },
  {
    name: 'P7 "Flame Failure" alarm when the "Diesel-oil Burner" button is in No:2 nozzle position (No:1 fuel nozzle is working, but it goes out when nozzle No:2 is activated).',
    reasons: [
      {
        name: "Too much initial air for combustion.",
        solutions: ["Reduce air by adjusting the damper."],
      },
      {
        name: 'Air damper is too open before "Diesel-oil Nozzle No:2" position is activated.',
        solutions: [
          'Adjust the cam on the damper motor to activate the "Diesel-oil Nozzle No:2" position.',
        ],
      },
      {
        name: "Contaminated (No:2) fuel nozzle.",
        solutions: ["Clean the filter on the nozzle.", "Replace the nozzle."],
      },
    ],
  },
  {
    name: 'P8 "Diesel-oil Nozzle No: 2" not working.',
    reasons: [
      {
        name: "No: 2 fuel nozzle is dirty.",
        solutions: ["Clean the filter on the nozzle.", "Replace the nozzle."],
      },
      {
        name: '"Diesel-oil Nozzle No: 2" solenoid does not open.',
        solutions: [
          "Check the electricity to the solenoid coils, the solenoid valve, and the coil.",
        ],
      },
      {
        name: "Flue gas temperature is too high (alarm value is 350\u00b0C for example).",
        solutions: ["Check the flue gas temperature and adjust if necessary."],
      },
      {
        name: "Combustion chamber temperature is too high (alarm value is 1200\u00b0C for example).",
        solutions: [
          "Check the combustion chamber temperature and adjust if necessary.",
        ],
      },
      {
        name: "Faulty air damper motor on the burner.",
        solutions: ["Check the faulty air damper motor."],
      },
      {
        name: 'Faulty button for "Diesel-oil Nozzle No: 2".',
        solutions: ["Check the button."],
      },
    ],
  },
  {
    name: "P9 Sludge (circulation) pump not working.",
    reasons: [
      {
        name: "Sludge tank is empty.",
        solutions: ["Check the sludge level in the tank."],
      },
      {
        name: 'Motor breaker tripped ("Motor Overload" alarm is on).',
        solutions: ["Reset the circuit breaker."],
      },
      {
        name: "Faulty contactor.",
        solutions: ["Check the contactor."],
      },
      {
        name: "Faulty motor.",
        solutions: ["Check the motor."],
      },
      {
        name: "Faulty pressure switch (presostat).",
        solutions: ["Check the pressure switch."],
      },
      {
        name: "Jammed (stuck) pump elements.",
        solutions: [
          "Disassemble the pump and perform maintenance, ensure the pump rotates freely.",
        ],
      },
    ],
  },
  {
    name: "P10 Sludge dosing (adjustment) pump not working.",
    reasons: [
      {
        name: "Jammed (stuck) pump elements.",
        solutions: [
          "Disassemble the pump and perform maintenance, ensure the pump rotates freely.",
        ],
      },
      {
        name: "Combustion chamber temperature is too low (lower set value 650 \u00b0C).",
        solutions: ["Check the temperature and adjust if necessary."],
      },
      {
        name: "Faulty sludge burning control relay.",
        solutions: ["Review the control relay."],
      },
      {
        name: "Faulty control relay used to activate the frequency converter.",
        solutions: ["Review the control relay."],
      },
      {
        name: "Faulty pressure switch of the sludge burner.",
        solutions: ["Check the pressure switch."],
      },
      {
        name: "Faulty thermostat controlling the flue gas temperature.",
        solutions: ["Review the thermostat."],
      },
      {
        name: "Faulty frequency converter.",
        solutions: ["Check the frequency converter."],
      },
      {
        name: "Faulty motor.",
        solutions: ["Check the motor."],
      },
      {
        name: "Low sludge pressure at the pump inlet.",
        solutions: [
          "Increase the pressure from the pressure adjustment valve at the outlet of the sludge circulation pump.",
        ],
      },
      {
        name: "Low air/steam pressure",
        solutions: ["Increase air/steam pressure."],
      },
    ],
  },
  {
    name: "P11 Sludge dosing pump is working, but after a while it goes out of circuit.",
    reasons: [
      {
        name: "Combustion chamber temperature drops below the lower set value (650 \u00b0C). Poor sludge quality or too much water in the sludge.",
        solutions: [
          "Check the temperature and adjust if necessary, drain the water in the sludge.",
        ],
      },
      {
        name: "The motor of the sludge dosing pump is overloaded.",
        solutions: [
          "Check the thermal overload setting, change the setting if necessary.",
        ],
      },
    ],
  },
  {
    name: "P12 Sludge dosing pump is working, but there is no flame (combustion) in the sludge burner.",
    reasons: [
      {
        name: "Sludge or air/steam valve is not open or there is blockage in the circuit.",
        solutions: [
          "Open the sludge or air/steam valves or clean the circuit by draining.",
        ],
      },
      {
        name: "Insufficient sludge or air/steam pressure.",
        solutions: ["Check the pressures."],
      },
      {
        name: "Too much air to the sludge nozzle.",
        solutions: ["Reduce the air."],
      },
      {
        name: "Faulty sludge valve.",
        solutions: ["Check the sludge valve."],
      },
      {
        name: "Faulty steam/air solenoid valve.",
        solutions: ["Check the solenoid valve and coil."],
      },
      {
        name: "Faulty pressure switches.",
        solutions: ["Check the pressure switches."],
      },
      {
        name: "Too much water in the sludge.",
        solutions: [
          "Check the sludge, drain the water in the sludge tank or temporarily burn the sludge with diesel-oil.",
        ],
      },
      {
        name: "Damaged or bad sludge nozzle.",
        solutions: [
          "Check, clean, and adjust the sludge nozzle. Replace the nozzle if necessary.",
        ],
      },
    ],
  },
  {
    name: 'P13 "Flue Air Draft Error" alarm.',
    reasons: [
      {
        name: "Very low negative pressure in the combustion chamber.",
        solutions: ["Check the pressure in the combustion chamber."],
      },
      {
        name: 'Manual/Automatic button is in the "Manual" position.',
        solutions: [
          'If the flue gas fan start button is in the "Manual" position, the flue gas damper cannot be adjusted automatically, so switch the button to the "Automatic" position.',
        ],
      },
      {
        name: "Pressure switch settings are outside normal limits.",
        solutions: ["Check the values and adjust if necessary."],
      },
      {
        name: "Faulty pressure switch or faulty fuse.",
        solutions: ["Replace the pressure switch or fuse."],
      },
      {
        name: "Faulty flue gas damper motor.",
        solutions: ["Check the motor."],
      },
    ],
  },
  {
    name: 'P14 "Flue Gas Temperature High" alarm.',
    reasons: [
      {
        name: "Flue gas temperature is too high (upper set value 350\u00b0C).",
        solutions: ["Check the flue gas temperature and adjust if necessary."],
      },
      {
        name: "Faulty thermostat.",
        solutions: ["Review the thermostat."],
      },
      {
        name: "Faulty electrical temperature sensor (thermocouple or thermal pile).",
        solutions: ["Check the electrical temperature sensors."],
      },
    ],
  },
  {
    name: 'P15 "Combustion Chamber Temperature High" alarm.',
    reasons: [
      {
        name: "Combustion chamber temperature is too high (upper set value 1200\u00b0C).",
        solutions: [
          "Check the combustion chamber temperature and adjust if necessary.",
        ],
      },
      {
        name: "Faulty thermostat.",
        solutions: ["Review the thermostat."],
      },
      {
        name: "Faulty electrical temperature sensor (thermocouple or thermal pile).",
        solutions: ["Check the electrical temperature sensors."],
      },
    ],
  },
  {
    name: 'P16 "Motor Overload" alarm.',
    reasons: [
      {
        name: "One of the motor circuit breakers has tripped.",
        solutions: ["Check the breakers, motors, set values, and pumps."],
      },
    ],
  },
  {
    name: 'P17 "Sludge/Steam (or Sludge/Air) Pressure Low" alarm.',
    reasons: [
      {
        name: "Sludge pressure is low.",
        solutions: ["Check the pressure and adjust if necessary."],
      },
      {
        name: "Steam/air pressure is low.",
        solutions: ["Check the pressure and adjust if necessary."],
      },
      {
        name: "Valves in the sludge circuit are closed.",
        solutions: ["Check the valves."],
      },
      {
        name: "Valves in the steam/air circuit are closed.",
        solutions: ["Check the valves."],
      },
      {
        name: "Pressure switch error for sludge.",
        solutions: ["Check the pressure switch."],
      },
      {
        name: "Pressure switch error for steam/air.",
        solutions: ["Check the pressure switch."],
      },
      {
        name: "Control relay error for sludge and steam/air pressure.",
        solutions: ["Review the control relay."],
      },
    ],
  },
  {
    name: "P18 Sludge cannot be burned.",
    reasons: [
      {
        name: "Sludge valves are not open or there is blockage in the circuit.",
        solutions: ["Open the sludge valves or clean the circuit."],
      },
      {
        name: "Air/steam valves are not open or there is water in the circuit.",
        solutions: [
          "Open the air/steam valves or drain the water in the circuit.",
        ],
      },
      {
        name: "Insufficient sludge pressure.",
        solutions: ["Check the sludge circuit, dosing pump, and nozzle."],
      },
      {
        name: "Insufficient air/steam pressure.",
        solutions: ["Check the pressures and circuit."],
      },
      {
        name: "Too much air to the sludge nozzle.",
        solutions: ["Reduce the air."],
      },
      {
        name: "Faulty sludge valve.",
        solutions: ["Check the sludge valve."],
      },
      {
        name: "Faulty steam/air solenoid valve.",
        solutions: ["Check the solenoid valve and coil."],
      },
      {
        name: "Faulty or incorrectly adjusted sludge pressure switch.",
        solutions: [
          "Check the pressure switch, readjust and replace the switch if necessary.",
        ],
      },
      {
        name: "Faulty or incorrectly adjusted air/steam pressure switch.",
        solutions: [
          "Check the pressure switch, readjust and replace the switch if necessary.",
        ],
      },
      {
        name: "Too much water in the sludge.",
        solutions: [
          "Check the sludge, drain the water in the sludge tank or temporarily burn the sludge with diesel-oil.",
        ],
      },
      {
        name: "Low sludge temperature.",
        solutions: ["Heat the sludge (up to 85\u00b0C)."],
      },
      {
        name: "Faulty sludge dosing pump.",
        solutions: [
          "Check the dosing valve (or frequency converter if available), pump stator, and rotor.",
        ],
      },
      {
        name: "Dirty or damaged sludge nozzle.",
        solutions: [
          "Check, clean, and adjust the sludge nozzle. Replace the nozzle if necessary.",
        ],
      },
      {
        name: "Low combustion chamber temperature.",
        solutions: [
          "Increase the combustion chamber temperature, run the incinerator with diesel-oil for a while longer.",
        ],
      },
      {
        name: "Insufficient pressure of the sludge discharged by the sludge circulation pump.",
        solutions: [
          "Check the sludge pressure adjustment valve at the outlet of the sludge circulation pump.",
        ],
      },
      {
        name: "Low sludge level in the sludge tank or the tank is empty.",
        solutions: [
          "Transfer some sludge to the incinerator sludge tank, heat the sludge, and drain the water in the sludge.",
        ],
      },
      {
        name: "High dosage (capacity) of sludge.",
        solutions: ["Start sludge burning with a low dosage."],
      },
    ],
  },
];

export default problems;
