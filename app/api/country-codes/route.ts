import { NextResponse } from "next/server"
import countries from "world-countries"
import {
  getCountryCallingCode,
  isSupportedCountry,
  type CountryCode as PhoneCountryCode,
} from "libphonenumber-js"

type CountryFromPackage = {
  name?: {
    common?: string
  }
  cca2?: string
  flag?: string
}

type DialCodeOption = {
  name: string
  code: string
  iso2: string
  flag: string
}

export async function GET() {
  const countryCodes = (countries as unknown as CountryFromPackage[])
    .map((country): DialCodeOption | null => {
      const name = country.name?.common
      const iso2 = country.cca2?.toUpperCase()
      const flag = country.flag || ""

      if (!name || !iso2) {
        return null
      }

      if (!isSupportedCountry(iso2)) {
        return null
      }

      const phoneCountryCode = iso2 as PhoneCountryCode
      const callingCode = getCountryCallingCode(phoneCountryCode)

      return {
        name,
        code: `+${callingCode}`,
        iso2,
        flag,
      }
    })
    .filter((country): country is DialCodeOption => country !== null)
    .sort((a, b) => a.name.localeCompare(b.name))

  return NextResponse.json(countryCodes)
}