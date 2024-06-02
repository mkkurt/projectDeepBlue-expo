export default [
  {
    name: "P1: Excessive salt in produced fresh water.",
    reasons: [
      {
        name: "P1R1: Salinometer (salinity meter) setting is incorrect.",
        solutions: ["P1C1: Adjust correctly."],
      },
      {
        name: "P1R2: Jacket water flow rate is too high.",
        solutions: [
          "P1C2: Slightly open the main engine fresh (jacket) water bypass valve to reduce capacity (the amount of main engine fresh water supplied to the heat exchanger).",
        ],
      },
      {
        name: "P1R3: Very low evaporation temperature (high vacuum).",
        solutions: [
          "P1C3: Slightly open the vacuum breaker valve, also slightly open the seawater bypass valve to the condenser to reduce the amount of seawater.",
        ],
      },
      {
        name: "P1R4: Excessive seawater in the separator.",
        solutions: [
          'P1C4.1: Check the ejector system (see "P4: Ejector system capacity too low").',
          'P1C4.2: Check the feed water system (see "P6: Feed water quantity too high").',
        ],
      },
      {
        name: "P1R5: There is a hole in the condenser tubes.",
        solutions: ["P1C5: Replace or plug the leaking tubes."],
      },
    ],
  },
  {
    name: "P2: Capacity (amount of fresh water produced) is too low.",
    reasons: [
      {
        name: "P2R1: Air in the fresh water side of the heat exchanger.",
        solutions: ["P2C1: Vent air from the heat exchanger."],
      },
      {
        name: "P2R2: Insufficient jacket water supplied to the heat exchanger (evaporation temperature decreases and feed water level rises).",
        solutions: [
          "P2C2: Slightly close the main engine fresh water bypass valve.",
        ],
      },
      {
        name: "P2R3: Excessive jacket water supplied to the heat exchanger (evaporation temperature and salinity increase, feed water level and vacuum decrease).",
        solutions: [
          "P2C3: Slightly open the main engine fresh water bypass valve.",
        ],
      },
      {
        name: "P2R4: Too little feed water (seawater) supplied to the heat exchanger.",
        solutions: ['P2C4: See "P5: Feed water quantity too low".'],
      },
      {
        name: "P2R5: Too much feed water supplied to the heat exchanger.",
        solutions: ['P2C5: See "P6: Feed water quantity too high".'],
      },
      {
        name: "P2R6: Evaporation temperature too high (low vacuum).",
        solutions: ['P2C6: See "P3: Evaporation temperature too high".'],
      },
      {
        name: "P2R7: Scale in the heat exchanger tubes.",
        solutions: ["P2C7: Clean the tubes with chemicals."],
      },
      {
        name: "P2R8: No evaporation due to insufficient vacuum (below 93%).",
        solutions: [
          'P2C8: Check the air ejector (see "P4: Ejector system capacity too low").',
        ],
      },
      {
        name: "P2R9: Solenoid valve remains open due to salinometer alarm, produced water is sent to bilge or heat exchanger due to excessive salinity.",
        solutions: ['P2C9: See "P1: Excessive salt in produced fresh water".'],
      },
      {
        name: "P2R10: Solenoid valve does not close completely.",
        solutions: ["P2C10: Check if the solenoid valve is dirty."],
      },
      {
        name: "P2R11: Condenser tubes are dirty.",
        solutions: ["P2C11: Clean the tubes."],
      },
      {
        name: "P2R12: Insufficient condensation.",
        solutions: [
          "P2C12: Increase the amount of cooling water supplied to the condenser.",
        ],
      },
    ],
  },
  {
    name: "P3: Evaporation temperature is too high (above 45\u00b0C).",
    reasons: [
      {
        name: "P3R1: Temperature gauge (thermometer) is showing incorrect reading.",
        solutions: [
          "P3C1: Check the temperature gauge and replace if necessary.",
        ],
      },
      {
        name: "P3R2: Vacuum breaker valve is too open.",
        solutions: ["P3C2: Close the valve."],
      },
      {
        name: "P3R3: Seawater going to the condenser is too hot or too little.",
        solutions: [
          "P3C3.1: Provide colder seawater to the condenser.",
          "P3C3.2: Provide more seawater to the condenser.",
        ],
      },
      {
        name: "P3R4: Jacket water quantity is too high.",
        solutions: [
          "P3C4: Slightly open the bypass valve to reduce the amount of main engine fresh water supplied to the heat exchanger.",
        ],
      },
      {
        name: "P3R5: Condenser tubes are clogged.",
        solutions: ["P3C5: Clean the condenser tubes."],
      },
      {
        name: "P3R6: There is air in the seawater cooling circuit of the condenser.",
        solutions: ["P3C6: Vent air from the condenser."],
      },
      {
        name: "P3R7: Distilled water pump is not pumping enough water and the condenser is filling up with water.",
        solutions: ["P3C7: Check the pump."],
      },
      {
        name: "P3R8: Air ejector capacity is too low.",
        solutions: ['P3C8: See "P4: Ejector system capacity too low".'],
      },
      {
        name: "P3R9: Leaks in the evaporator.",
        solutions: [
          "P3C9: Test the evaporator completely and repair any leaks that break the vacuum in the evaporator.",
        ],
      },
    ],
  },
  {
    name: "P4: Ejector system capacity is too low.",
    reasons: [
      {
        name: "P4R1: Pressure before ejectors is too low (e.g. below the required 3-4 bar pressure).",
        solutions: [
          "P4C1: Check the ejector pump, maintain the pump and replace the wear rings if necessary.",
        ],
      },
      {
        name: "P4R2: Back pressure is too high at the ejectors.",
        solutions: [
          "P4C2: Fully open the sea discharge valve, maintain the valve if necessary and check if the discharge pipes are dirty/clogged.",
        ],
      },
      {
        name: "P4R3: Ejector pump is not producing any pressure.",
        solutions: [
          "P4C3: Check the rotation direction of the pump, bleed the pump. If necessary, take other pumps using seawater from the same valve chest out of service and first start the ejector pump, then the other pumps.",
        ],
      },
      {
        name: "P4R4: Water entering the ejectors is too hot.",
        solutions: [
          "P4C4: If possible, ensure that the seawater entering the ejectors is cold.",
        ],
      },
      {
        name: "P4R5: The non-return valve in the water circuit of one of the ejectors is faulty.",
        solutions: [
          "P4C5: Maintain the non-return valve, make sure the clapper inside the valve moves freely and easily.",
        ],
      },
      {
        name: "P4R6: Ejector nozzle is worn.",
        solutions: ["P4C6: Replace the nozzle."],
      },
      {
        name: "P4R7: The nozzle inside the ejector is clogged with any object (weld bead, screw, mussel, etc.).",
        solutions: [
          "P4C7: Disassemble the flange connections and the ejector completely and check that the inside is clear.",
        ],
      },
      {
        name: "P4R8: A blind plug or any object may have been left in the feed and discharge circuit of the ejector water or in the air suction circuit from the condenser (during the commissioning of the evaporator).",
        solutions: ["P4C8: Find and remove."],
      },
    ],
  },
  {
    name: "P5: Insufficient feed water quantity.",
    reasons: [
      {
        name: "P5R1: Feed water pressure is too low (e.g. below the required 3-4 bar pressure).",
        solutions: ["P5C1: Clean the filter in the feed water circuit."],
      },
      {
        name: "P5R2: No feed water pressure, but water pressure at the filter in the feed circuit.",
        solutions: [
          "P5C2: Check the safety valve in the feed water line, maintain it if necessary.",
        ],
      },
      {
        name: "P5R3: The orifice in the feed water circuit is clogged or damaged.",
        solutions: [
          "P5C3: Remove and maintain the orifice, replace if necessary.",
        ],
      },
    ],
  },
  {
    name: "P6: Feed water quantity is too high.",
    reasons: [
      {
        name: "P6R1: Feed water pressure is too high (e.g. over 6 bar, ejector pump is taking seawater from an over-pressurized circuit).",
        solutions: [
          "P6C1: Install an orifice on the over-pressure side of the ejector pump suction and reduce the pressure.",
        ],
      },
      {
        name: "P6R2: The orifice in the feed water circuit is damaged.",
        solutions: [
          "P6C2: Remove and maintain the orifice, replace if necessary.",
        ],
      },
    ],
  },
  {
    name: "P7: Scale in the heat exchanger tubes.",
    reasons: [
      {
        name: "P7R1: Evaporation temperature is too high (low vacuum).",
        solutions: ["P7C1: See P3: Evaporation temperature too high."],
      },
      {
        name: "P7R2: Jacket water capacity is too high.",
        solutions: [
          "P7C2: Slightly open the main engine fresh water bypass valve to reduce capacity (by reducing the water supplied to the heat exchanger).",
        ],
      },
      {
        name: "P7R3: Insufficient feed water supplied to the heat exchanger.",
        solutions: ["P7C3: See P5: Feed water quantity too low."],
      },
    ],
  },
  {
    name: "P8: Distilled water pump (fresh water pump) does not take in any water or does not deliver enough water.",
    reasons: [
      {
        name: "P8R1: Insufficient pump flow rate.",
        solutions: [
          "P8C1: Check the pump speed, maintain the pump if necessary and replace the wear rings.",
        ],
      },
      {
        name: "P8R2: Clean (distilled) water outlet valve is not open.",
        solutions: [
          "P8C2: Open the valve and make sure the valve is not stuck.",
        ],
      },
      {
        name: "P8R3: The filter in the flow meter is clogged and obstructing the flow of water.",
        solutions: ["P8C3: Clean the filter."],
      },
      {
        name: "P8R4: There is a leak in the pump throat.",
        solutions: [
          "P8C4: Tighten the gland packing or renew the mechanical seal.",
        ],
      },
      {
        name: "P8R5: There is dirt on the suction side of the pump.",
        solutions: ["P8C5: Clean the dirt."],
      },
      {
        name: "P8R6: Back pressure is too high at the pump outlet.",
        solutions: ["P8C6: Reduce the back pressure."],
      },
      {
        name: "P8R7: Pump is running without back pressure.",
        solutions: [
          "P8C7: Provide some back pressure by closing the valve after the pump.",
        ],
      },
      {
        name: "P8R8: There is no water in the pump.",
        solutions: [
          "P8C8: Take the pump out of service and break the vacuum so that water flows into the pump.",
        ],
      },
    ],
  },
];
