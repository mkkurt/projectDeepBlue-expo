export default [
  {
    name: "P1 Motor protection trip activated.",
    reasons: [
      { name: "P1R1 Motor burned out.", solutions: ["P1C1 Replace."] },
      {
        name: "P1R2 Short circuit in the motor or electrical panel cables.",
        solutions: ["P1C2 Check both."],
      },
      {
        name: "P1R3 Protection switch incorrectly set.",
        solutions: ["P1C3 Correct the setting."],
      },
      {
        name: "P1R4 Pump rotor seized.",
        solutions: ["P1C4 Find the cause, replace rotor and/or stator."],
      },
      {
        name: "P1R5 Pump shaft seized.",
        solutions: ["P1C5 Loosen gland nuts of the stuffing box."],
      },
    ],
  },
  {
    name: "P2 Pump not running.",
    reasons: [
      {
        name: "P2R1 No voltage.",
        solutions: [
          "P2C1 Provide the required voltage for the electric motor.",
        ],
      },
      { name: "P2R2 Fuse blown.", solutions: ["P2C2 Replace."] },
      {
        name: "P2R3 Pump shaft jammed.",
        solutions: [
          "P2C3 Loosen gland nuts of the stuffing box and try to turn the pump by hand or with a wrench.",
        ],
      },
      {
        name: "P2R4 Pump coupling broken or coupling rubber broken.",
        solutions: ["P2C4 Replace."],
      },
      {
        name: "P2R5 Oily water separator pump stopped due to high ppm, automatic stop device keeps the pump in stop position.",
        solutions: ["P2C5 Clean the oil content monitor (OCD)."],
      },
      {
        name: "P2R6 Pump stopped because the oily water separator switched to backwash position.",
        solutions: [
          "P2C6 It is normal for the pump to stop, it will run when backwash is finished.",
        ],
      },
    ],
  },
  {
    name: "P3 Low pumping performance.",
    reasons: [
      {
        name: "P3R1 Filters (coalescer) inside the oily water separator are dirty.",
        solutions: ["P3C1 Clean or replace."],
      },
      { name: "P3R2 Pump suction filter dirty.", solutions: ["P3C2 Clean."] },
      {
        name: "P3R3 Insufficient pump.",
        solutions: ["P3C3 Replace stator or worn parts."],
      },
      {
        name: "P3R4 Pump inlet clogged.",
        solutions: ["P3C4 Clean and check suction valve disc."],
      },
    ],
  },
  {
    name: "P4 Bilge cannot be discharged to the sea with the separator.",
    reasons: [
      {
        name: "P4R1 Discharge valve to sea closed.",
        solutions: ["P4C1 Open the valve."],
      },
      {
        name: "P4R2 Discharge valve to sea (solenoid/pneumatic controlled) closed.",
        solutions: [
          "P4C2.1 Check for electrical problems or loose cables.",
          "P4C2.2 Check if bilge water is above 15 ppm.",
          "P4C2.3 Check if there is any sticking in the solenoid valve piston or diaphragm of the sea discharge.",
          "P4C2.4 Check if the solenoid coil is burnt, replace if burnt.",
          "P4C2.5 Check if the pollution reader (detector) is reading correctly and clean the reader.",
        ],
      },
      {
        name: "P4R3 Dirty coalescer filter.",
        solutions: ["P4C3 Wash the filter with clean water or replace it."],
      },
      {
        name: "P4R4 Insufficient pump.",
        solutions: [
          "P4C4 Replace stator or pump or clean separator/pump suction filter.",
        ],
      },
      {
        name: "P4R5 Sludge (dirty oil) solenoid valve open.",
        solutions: ["P4C5 Wait for the valve to close."],
      },
      {
        name: "P4R6 Bilge suction valve closed.",
        solutions: ["P4C6 Open the valve."],
      },
    ],
  },
  {
    name: "P5 Separator cannot discharge bilge due to high ppm.",
    reasons: [
      {
        name: "P5R1 Bilge is very dirty, ppm is really high (above 15 ppm).",
        solutions: [
          "P5C1 Clean the bilge or transfer it to the tank and let it rest.",
        ],
      },
      {
        name: "P5R2 There is air in the water in the sample coming to the reader.",
        solutions: [
          "P5C2 Vent it or install a new air release circuit to the reader.",
        ],
      },
      {
        name: "P5R3 There is air in the separator.",
        solutions: ["P5C3 Fill the separator with water and vent it."],
      },
      {
        name: "P5R4 Reading error in the reader (OCD).",
        solutions: ["P5C4 Clean the reader."],
      },
      {
        name: "P5R5 Looseness or error in the electronic system elements of the reader.",
        solutions: ["P5C5 Tighten loose elements or find and fix the error."],
      },
      {
        name: "P5R6 Although the bilge looks clean, medicine (chemical) has been spilled.",
        solutions: [
          "P5C6 Transfer the bilge to the tank, give it to the port boats that receive bilge/sludge at the port.",
        ],
      },
      {
        name: "P5R7 Separator (coalescer or adsorber) filters are dirty.",
        solutions: ["P5C7 Clean or replace."],
      },
      {
        name: "P5R8 If dirty oil (sludge) does not remain in the centrifuge, the oil in the sludge tank enters the circuit and causes high ppm.",
        solutions: ["P5C8 Repair or replace the oil sensor."],
      },
    ],
  },
  {
    name: "P6 Bilge cannot be discharged to the sea even though it is clean (or appears to be).",
    reasons: [
      {
        name: "P6R1 There is air in the sample water coming to the reader.",
        solutions: [
          "P6C1 Vent it or install a new air release circuit to the reader.",
        ],
      },
      {
        name: "P6R2 There is air in the separator.",
        solutions: ["P6C2 Fill the separator with water and vent it."],
      },
      {
        name: "P6R3 Although the bilge looks clean, medicine (chemical) has been spilled.",
        solutions: [
          "P6C3 Transfer the bilge to the tank and give it to the port boats that receive bilge/sludge at the port.",
        ],
      },
      {
        name: "P6R4 Reading error in the reader (OCD).",
        solutions: ["P6C4 Clean the reader."],
      },
      {
        name: "P6R5 If the sludge sensor is not working, oil goes to the circuit and causes high ppm.",
        solutions: ["P6C5 Repair or replace the sensor."],
      },
      {
        name: "P6R6 Separator (coalescer or adsorber) filters are dirty.",
        solutions: ["P6C6 Clean or replace."],
      },
    ],
  },
  {
    name: "P7 Dirty oil (sludge) valve does not open.",
    reasons: [
      {
        name: "P7R1 Normal.",
        solutions: [
          "P7C1 Do nothing, the amount of dirty oil in the upper part of the separator tank may be low.",
        ],
      },
      {
        name: "P7R2 Electrical problem.",
        solutions: ["P7C2 Check cables and electrical circuit."],
      },
      {
        name: "P7R3 Dirty oil level sensor not working.",
        solutions: ["P7C3 Clean, repair or replace the sensor."],
      },
    ],
  },
  {
    name: "P8 No heating.",
    reasons: [
      {
        name: "P8R1 Heating element not working.",
        solutions: ["P8C1 Replace."],
      },
      {
        name: "P8R2 Wrong or broken connection.",
        solutions: ["P8C2 Check or renew the connection."],
      },
      {
        name: "P8R3 Temperature reader incorrectly set or faulty.",
        solutions: ["P8C3 Set correctly or replace."],
      },
      { name: "P8R4 Waste fuse.", solutions: ["P8C4 Replace."] },
    ],
  },
  {
    name: "P9 High pressure difference in the filters inside the separator.",
    reasons: [
      {
        name: "P9R1 Separator filters are dirty.",
        solutions: [
          "P9C1 Clean the filters (wash with clean water) or replace them.",
        ],
      },
    ],
  },
  {
    name: "P10 Backwashing in the separator is constantly repeated.",
    reasons: [
      {
        name: "P10R1 Air is sucked due to empty bilge well or bilge tank.",
        solutions: ["P10C1 Stop the bilge separator."],
      },
      {
        name: "P10R2 If the bilge separator is operated in automatic position, the bilge tank low level float (switch) is not working.",
        solutions: ["P10C2 Check the float and electrical connections."],
      },
    ],
  },
  {
    name: "P11 Backwash is constantly repeated and the vacuum value in the separator is much less than it should be.",
    reasons: [
      {
        name: "P11R1 Air is sucked into the system from the receiving circuit, separator cover, flanges and valves.",
        solutions: [
          "P11C1 Test the separator and receiving circuit, find the places where air is sucked and eliminate the leaks.",
        ],
      },
    ],
  },
  {
    name: "P12 Piston valves are not working.",
    reasons: [
      {
        name: "P12R1 Insufficient or no compressed air.",
        solutions: ["P12C1 Provide compressed air between 6-8 bar."],
      },
      {
        name: "P12R2 No electricity to the valve solenoid coils.",
        solutions: ["P12C2 Check the control panel and electrical circuits."],
      },
      {
        name: "P12R3 Damaged piston ring or stuck piston.",
        solutions: ["P12C3 Replace cylinder, remove and clean piston."],
      },
      {
        name: "P12R4 Defective solenoid valve.",
        solutions: [
          "P12C4 Apply and cut off electricity to the solenoid valve to check the function of the valve.",
        ],
      },
      {
        name: "P12R5 Dirt inside the solenoid valve.",
        solutions: ["P12C5 Clean the valve."],
      },
    ],
  },
  {
    name: "P13 The oily water separator is being cleaned unusually slowly or continuously.",
    reasons: [
      {
        name: "P13R1 The non-return valve in the clean water inlet is leaking.",
        solutions: ["P13C1 Disassemble and maintain the valve."],
      },
      {
        name: "P13R2 Dirty oil outlet clogged.",
        solutions: ["P13C2 Check and clean."],
      },
      {
        name: "P13R3 Backwash water pressure is insufficient.",
        solutions: [
          "P13C3 Check the water pressure (should be minimum 0.5 bar, maximum 4.5 bar).",
        ],
      },
    ],
  },
  {
    name: "P14 The system detects oil, but also discharges water from the oil outlet.",
    reasons: [
      {
        name: "P14R1 Problem with the cable that stops the oil discharge between the control panel and the sensor.",
        solutions: [
          "P14C1 Check the oil sensor connections and renew if necessary.",
        ],
      },
      {
        name: "P14R2 Contaminated (insulated) oil sensor.",
        solutions: ["P14C2 Clean the contact surfaces."],
      },
      {
        name: "P14R3 Electronic card error.",
        solutions: ["P14C3 Repair or replace the card."],
      },
    ],
  },
  {
    name: "P15 System recognizes oil, but does not discharge.",
    reasons: [
      {
        name: "P15R1 Blockage in the circuit from the oily water separator to the sludge collection tank.",
        solutions: [
          "P15C1 Check and clean the oil outlet circuit from the oily water separator.",
        ],
      },
      {
        name: "P15R2 Water used for backwashing has been cut off.",
        solutions: [
          "P15C2 Provide water at the appropriate pressure or check the valve that supplies the wash water.",
        ],
      },
      {
        name: "P15R3 Problem with the valve that supplies wash water to the separator or the oil outlet valve.",
        solutions: [
          "P15C3 Check if electricity is coming to the solenoid coils of the valves.",
        ],
      },
    ],
  },
  {
    name: "P16 Backwashing (cleaning with water) cannot be performed in the system.",
    reasons: [
      {
        name: "P16R1 The outlet circuit of the wash water to the bilge is clogged.",
        solutions: ["P16C1 Check and clean the circuit."],
      },
      {
        name: "P16R2 Problem with the valve that supplies wash water to the separator or the wash water outlet valve.",
        solutions: [
          "P16C2 Check if electricity is coming to the solenoid coils of the valves.",
        ],
      },
    ],
  },
  {
    name: "P17 The system (oil sensor, electrode) does not recognize oil.",
    reasons: [
      {
        name: "P17R1 Problem with the electrical cables between the oil sensor and the control panel.",
        solutions: ["P17C1 Check cables and cable connections."],
      },
      {
        name: "P17R2 Defective electronic card.",
        solutions: [
          "P17C2 Check the card by unplugging the electrode, renew the card if necessary.",
        ],
      },
      {
        name: "P17R3 Very high electrical conductivity or emulsions in the oil phase.",
        solutions: ["P17C3 Prevent emulsion formation."],
      },
      {
        name: "P17R4 Bilge is really clean.",
        solutions: ["P17C4 Do nothing."],
      },
    ],
  },
];
