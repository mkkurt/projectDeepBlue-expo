export default [
  {
    name: "P1: No pressure buildup in the system or pressure is too low.",
    reasons: [
      {
        name: "P1R1: The direction of rotation of the electric motor is wrong.",
        solutions: ["P1S1: Change the electrical connections."],
      },
      {
        name: "P1R2: Connections in the pump inlet circuits are loose.",
        solutions: ["P1S2: Tighten the connections."],
      },
      {
        name: "P1R3: Foreign matter or particles in the receiver circuit.",
        solutions: ["P1S3: Clean and remove foreign matter."],
      },
      {
        name: "P1R4: Insufficient oil in the tank.",
        solutions: ["P1S4: Fill the tank with oil."],
      },
      {
        name: "P1R5: Clutch or drive shaft is broken.",
        solutions: ["P1S5: Replace."],
      },
      {
        name: "P1R6: Pump is defective.",
        solutions: ["P1S6: Replace."],
      },
      {
        name: "P1R7: Pressure gauge is defective.",
        solutions: ["P1S7: Replace."],
      },
      {
        name: "P1R8: Pressure limiting valve setting is incorrect or valve is defective.",
        solutions: ["P1S8: Readjust or replace."],
      },
    ],
  },
  {
    name: "P2: Rudder does not move.",
    reasons: [
      {
        name: "P2R1: Oil is stuck in the return circuit because the directional control valve slide is blocked.",
        solutions: ["P2S1: Replace the valve."],
      },
      {
        name: "P2R2: Oil is stuck in the return circuit because the brake valve slide is blocked.",
        solutions: ["P2S2: Replace the valve."],
      },
      {
        name: "P2R3: No warning is coming to the solenoid of the directional control valve.",
        solutions: ["P2S3: Check the electrical circuit diagram."],
      },
      {
        name: "P2R4: Problem with the safety valve.",
        solutions: ["P2S4: Check if the safety valve is adjusted correctly."],
      },
      {
        name: "P2R5: Error in circuit valves.",
        solutions: [
          "P2S5: Check all valves on the hydraulic circuit that should be open and closed.",
        ],
      },
      {
        name: "P2R6: Problem with autopilot control.",
        solutions: [
          "P2S6: Control the steering gear locally from the steering room.",
        ],
      },
      {
        name: "P2R7: Problem with the hydraulic pump.",
        solutions: [
          "P2S7: Check the pump, pump suction, and pump elements, and service the pump if necessary.",
        ],
      },
      {
        name: "P2R8: Jamming or sticking in cylinder pistons or rudder carrier fork.",
        solutions: ["P2S8: Check cylinder pistons and fork."],
      },
    ],
  },
  {
    name: "P3: Pump does not pump oil.",
    reasons: [
      {
        name: "P3R1: Oil level is too low.",
        solutions: ["P3S1: Fill the tank with oil."],
      },
      {
        name: "P3R2: Leaks or air in the circuit.",
        solutions: [
          "P3S2: Find and seal leaks. Bleed the system if there is air in the circuit.",
        ],
      },
      {
        name: "P3R3: Filling and venting filters are clogged.",
        solutions: ["P3S3: Clean or replace."],
      },
    ],
  },
  {
    name: "P4: Rudder moves very slowly.",
    reasons: [
      {
        name: "P4R1: By-pass valve is open.",
        solutions: ["P4S1: Close the valve."],
      },
      {
        name: "P4R2: Directional control valve slide is not fully displaced.",
        solutions: [
          "P4S2.1: Check the stroke of the directional control valve slide.",
          "P4S2.2: Check the warning (electrical circuit) coming to the directional control valve solenoid.",
        ],
      },
      {
        name: "P4R3: Cylinder piston seals (sealing elements) or other connections are leaking.",
        solutions: [
          "P4S3: Replace the seals or eliminate external leaks by tightening the connections.",
        ],
      },
      {
        name: "P4R4: Pressure limiting valve is defective or dirty.",
        solutions: ["P4S4: Remove and clean or replace the valve."],
      },
      {
        name: "P4R5: Rudder torque is too high (higher than it should be).",
        solutions: ["P4S5: Consult the shipyard."],
      },
      {
        name: "P4R6: Electric motor speed is too low.",
        solutions: [
          "P4S6: Check the frequency in the ship's main electrical circuit.",
        ],
      },
      {
        name: "P4R7: Problem with the hydraulic pump.",
        solutions: [
          "P4S7: Check the pump, pump suction, pump-tank connection, pump sound, and pump elements, and service the pump if necessary.",
        ],
      },
      {
        name: "P4R8: Drop in safety valve pressure.",
        solutions: [
          "P4S8: Check the safety valve pressure (whether there is a pressure drop).",
        ],
      },
      {
        name: "P4R9: Problem with the air release valve.",
        solutions: [
          "P4S9: Check the air release valve, if it is open, close the valve.",
        ],
      },
      {
        name: "P4R10: Error in circuit valves.",
        solutions: [
          "P4S10: Check all valves on the hydraulic circuit that should be open and closed.",
        ],
      },
    ],
  },
  {
    name: "P5: Rudder movement is irregular or intermittent.",
    reasons: [
      {
        name: "P5R1: Air in the hydraulic circuit causes delay and interruption in movement.",
        solutions: ["P5S1: Remove air from the hydraulic circuit."],
      },
      {
        name: "P5R2: Over-tightened seals cause intermittent movement of the piston.",
        solutions: ["P5S2: Tighten the seals properly and as they should be."],
      },
      {
        name: "P5R3: Clearance between rudder shaft and bearing.",
        solutions: [
          "P5S3: Disassemble and repair when the ship enters the shipyard.",
        ],
      },
    ],
  },
  {
    name: "P6: Rudder instability or not staying fixed (in the place where it should be) (make sure the unit returns when working with autopilot in normal operating position).",
    reasons: [
      {
        name: "P6R1: Increase in working clearances of each connection pin.",
        solutions: ["P6S1: Repair or replace the necessary part."],
      },
      {
        name: "P6R2: Increase in clearance between rudder shaft actuator arms and bearings.",
        solutions: ["P6S2: Repair."],
      },
      {
        name: "P6R3: Incorrect adjustment of the air release valve.",
        solutions: [
          "P6S3: Repair moving parts and make sure the valve is closed.",
        ],
      },
    ],
  },
  {
    name: "P7: Abnormal sound or noise while the ship is underway.",
    reasons: [
      {
        name: "P7R1: Air in the hydraulic circuit.",
        solutions: ["P7S1: Bleed the air and make sure the valve is closed."],
      },
      {
        name: "P7R2: Noise from cylinder piston seals due to over-tightening of seals.",
        solutions: ["P7S2: Tighten the seals properly and as they should be."],
      },
      {
        name: "P7R3: Noise from the rudder carrier.",
        solutions: ["P7S3: Consult the company and check the lubrication."],
      },
      {
        name: "P7R4: Noise from the pump.",
        solutions: ["P7S4: Stop the pump and service it."],
      },
    ],
  },
  {
    name: "P8: Abnormal pressure increase in all cylinders.",
    reasons: [
      {
        name: "P8R1: Error in the positions of the circuit valves.",
        solutions: [
          "P8S1: Open the valves that should be open and close the ones that should be closed.",
        ],
      },
    ],
  },
  {
    name: "P9: Motor does not run.",
    reasons: [
      {
        name: "P9R1: Damaged fuses.",
        solutions: ["P9S1: Replace fuses."],
      },
      {
        name: "P9R2: Motor protection is in the circuit.",
        solutions: [
          "P9S2: Check the settings of the motor protection, readjust if necessary.",
        ],
      },
      {
        name: "P9R3: Motor contactor is preventing operation.",
        solutions: ["P9S3: Check the contactor."],
      },
      {
        name: "P9R4: Jamming or sticking in the pump.",
        solutions: [
          "P9S4: Try to turn the pump manually, service the pump if necessary.",
        ],
      },
    ],
  },
  {
    name: "P10: There is a rattling sound in the motor and the motor is drawing high amperage.",
    reasons: [
      {
        name: "P10R1: Damaged motor winding.",
        solutions: ["P10S1: Replace the motor."],
      },
      {
        name: "P10R2: One phase is missing.",
        solutions: [
          "P10S2.1: Check the fuse.",
          "P10S2.2: Check the contactor.",
        ],
      },
    ],
  },
  {
    name: "P11: Wrong direction rotation in the motor.",
    reasons: [
      {
        name: "P11R1: Wrong connection in the motor.",
        solutions: ["P11S1: Swap the connection of two phases."],
      },
    ],
  },
  {
    name: "P12: Fuses blow or motor contactor activates immediately.",
    reasons: [
      {
        name: "P12R1: Short circuit in cables.",
        solutions: ["P12S1: Find and repair the short circuit."],
      },
      {
        name: "P12R2: Short circuit to the ship's hull.",
        solutions: ["P12S2: Find and repair the short circuit."],
      },
      {
        name: "P12R3: Wrong connection in the motor.",
        solutions: ["P12S3: Check the connections."],
      },
    ],
  },
  {
    name: "P13: Motor is too hot.",
    reasons: [
      {
        name: "P13R1: The mains voltage varies by more than 5% compared to the rated voltage of the motor.",
        solutions: ["P13S1: Make sure the voltage is correct."],
      },
      {
        name: "P13R2: Cooling air volume is too low or fan is clogged.",
        solutions: [
          "P13S2: Make sure the air inlet and outlet are not restricted.",
        ],
      },
      {
        name: "P13R3: Cooling air is hot.",
        solutions: ["P13S3: Provide normal clean air."],
      },
    ],
  },
  {
    name: "P14: Abnormal sound in the pump.",
    reasons: [
      {
        name: "P14R1: Too much air in the system.",
        solutions: ["P14S1: Bleed the air and make sure the valve is closed."],
      },
      {
        name: "P14R2: Problem with internal pump elements.",
        solutions: [
          "P14S2: Check piston, rod and bearings, replace necessary parts.",
        ],
      },
    ],
  },
  {
    name: "P15: Overheating in the pump bearing housing (the bearing housing should be 10-20°C higher than the oil temperature under normal conditions).",
    reasons: [
      {
        name: "P15R1: Misalignment between pump and electric motor shafts.",
        solutions: ["P15S1: Realign pump and motor."],
      },
      {
        name: "P15R2: Dust, dirt, etc. in the bearings. substances.",
        solutions: ["P15S2: Check the bearings by turning the pump manually."],
      },
      {
        name: "P15R3: Leak from the oil seal.",
        solutions: ["P15S3: Stop the leak and ensure sufficient lubrication."],
      },
    ],
  },
  {
    name: "P16: Excessive noise or noise or foaming in the tank.",
    reasons: [
      {
        name: "P16R1: Air in the oil circulation line.",
        solutions: [
          "P16S1: De-aerate the system (remove air from the hydraulic circuit).",
        ],
      },
      {
        name: "P16R2: Pump is sucking air.",
        solutions: ["P16S2: Check the suction lines or elbows for cracks."],
      },
      {
        name: "P16R3: Not enough oil in the tank.",
        solutions: ["P16S3: Fill the tank with oil."],
      },
      {
        name: "P16R4: Faulty pump.",
        solutions: ["P16S4: Replace the pump."],
      },
    ],
  },
  {
    name: "P17: Excessive oil temperature in the oil tank (can be 30°C higher than room temperature under normal conditions and when the pump is running).",
    reasons: [
      {
        name: "P17R1: Problem with the pump.",
        solutions: [
          "P17S1: Stop the pump and service it when the hydraulic oil temperature rises above 80°C.",
        ],
      },
      {
        name: "P17R2: Problem with oil.",
        solutions: [
          "P17S2: Check the level and quality of the oil, perform necessary tests.",
        ],
      },
    ],
  },
];
