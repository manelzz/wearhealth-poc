import * as yup from "yup";
import {
  ConvectorModel,
  ReadOnly,
  Required,
  Validate,
  FlatConvectorModel
} from "@worldsibu/convector-core-model";

export class x509Identities extends ConvectorModel<x509Identities>{
  @ReadOnly()
  public readonly type = 'io.worldsibu.examples.x509identity';

  @Validate(yup.boolean())
  @Required()
  status: boolean;
  @Validate(yup.string())
  @Required()
  fingerprint: string;
}

export class Participant extends ConvectorModel<Participant> {
  @ReadOnly()
  @Required()
  public readonly type = "io.worldsibu.participant";

  @Required()
  @Validate(yup.string())
  public name: string;

  @ReadOnly()
  @Validate(yup.string())
  public msp: string;

  @Required()
  @Validate(yup.array(x509Identities.schema()))
  public identities: Array<FlatConvectorModel<x509Identities>>;
}
